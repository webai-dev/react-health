import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Skeleton from '@material-ui/lab/Skeleton';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloseIcon from '@material-ui/icons/Close';


import Chat from 'twilio-chat';

import { GreenText, GreenButton, WhiteText, PrimaryText } from '../../../../../components';
import i18n from '../../../../../i18n';

import { getTwilioChatToken } from '../../../../../utils'

import Message from './Message';
import { Images } from '../../../../../styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  attachIcon: {
    width: 30,
    cursor: 'pointer',
  },
  attachment: {
    position: 'absolute',
    top: -20,
    color: '#fff',
    width: '100%',
    backgroundColor: '#5CCD92',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeIcon: {
    width: 18,
    height: 18,
    cursor: 'pointer',
  },
  inputSection: {
    display: 'flex',
    alignItems: 'center',
  },
  messageSection: {
    flex: 1,
    overflowY: 'auto',
    margin: '1rem 0',
  },
  skeleton: {
    width: '100%',
    height: 70,
    borderRadius: 6,
    margin: '1rem 0',
    transform: 'none',
  },
  textArea: {
    borderRadius: 9,
    border: '2px solid rgba(102, 102, 102, 0.16)',
    height: 100,
    flex: 1,
    resize: 'none',
  },
}));

let twilioChatClient = null;
let twilioChatChannel = null;

const ChatComponent = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    isChatHistoryLoading: false,
    isChatHistoryLoaded: false,
    messages: [],
    message: '',
    errorMessage: '',
    attachedFile: null,
  });
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null)
  const messagesContainerRef = useRef(null)
  const { channelId, identity } = props;
  const { isChatHistoryLoaded, isChatHistoryLoading, errorMessage, messages, message, attachedFile } = state;

  const handleClickAttachButton = () => {
    fileInputRef.current.click();
  };

  const handleChangeFile = (e) => {
    const files = e.target.files;
    
    setState((prevState) => ({
      ...prevState,
      attachedFile: files[0],
    }));
  };

  useEffect(() => {
    if (identity && channelId) {
      setState((prevState) => ({
        ...prevState,
        isChatHistoryLoading: true,
      }));

      getTwilioChatToken(identity)
        .then(data => Chat.create(data.token))
        .then(client => setupChatClient(client, channelId))
        .catch((e) => {
          console.log(e);
          handleError();
        });
    }
  }, [identity, channelId])

  const setupChatClient = (client, channelId) => {
    twilioChatClient = client;

    client
      .getChannelByUniqueName(channelId)
      .then(channel => channel)
      .catch(error => {
        if (error.body.code === 50300) {
          return client.createChannel({ uniqueName: channelId });
        } else {
          handleError(error);
        }
      })
      .then(channel => {
        twilioChatChannel = channel;

        return channel.join().catch(() => {});
      })
      .then(() => {
        twilioChatChannel.getMessages().then(messagesLoaded);
        twilioChatChannel.on('messageAdded', messageAdded);
      })
      .catch(handleError);
  };

  const messagesLoaded = (messagePage) => {
    const messages = messagePage.items;
    const promises = messages.map((message) => {
      if (message.type === 'text') {
        return Promise.resolve();
      } else if (message.type === 'media') {
        return new Promise((resolve, reject) => {
          message.media.getContentTemporaryUrl().then((url) => {
            message.url = url;
            resolve();
          }).catch(() => {
            message.url = '';
          });
        });
      }
    });

    Promise.all(promises).then(() => {
      setState((prevState) => ({
        ...prevState,
        isChatHistoryLoaded: true,
        isChatHistoryLoading: false,
        messages: messagePage.items,
      }));
    });
  }

  const messageAdded = async (message) => {
    let url = '';

    try {
      url = await message.media.getContentTemporaryUrl();
    } catch(e) {
      console.log(e);
    }

    message.url = url;

    setState((prevState) => ({
      ...prevState,
      messages: [
        ...prevState.messages,
        message,
      ]
    }));

    messagesContainerRef.current.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }

  const handleError = (error) => {
    setState((prevState) => ({
      ...prevState,
      isChatHistoryLoading: false,
      isChatHistoryLoaded: false,
      errorMessage: 'Could not load chat history',
    }));
  };

  const handleClickSend = () => {
    const { message, attachedFile } = state;

    if (message) {
      twilioChatChannel.sendMessage(message);
    }

    if (attachedFile) {
      const formData = new FormData();

      formData.append('file', attachedFile);
      twilioChatChannel.sendMessage(formData);
    }

    fileInputRef.current.value = null;
    setState((prevState) => ({
      ...prevState,
      message: '',
      attachedFile: null,
    }));
  };

  const handleClickCloseIcon = () => {
    fileInputRef.current.value = null;

    setState((prevState) => ({
      ...prevState,
      attachedFile: null,
    }));
  };

  const handleChangeMessage = (e) => {
    const { value } = e.target;

    setState((prevState) => ({
      ...prevState,
      message: value,
    }));
  };

  return (
    <div className={classes.root}>
      <GreenText>{i18n.t('Chat')}</GreenText>
      <div className={classes.messageSection} ref={messagesContainerRef}>
        {
          isChatHistoryLoading && [1, 2, 3].map((v, i) => (
            <Skeleton className={classes.skeleton} key={i}/>
          ))
        }
        {
          !isChatHistoryLoaded && !isChatHistoryLoading && (
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
              <PrimaryText>{errorMessage}</PrimaryText>
            </Box>
          )
        }
        {
          isChatHistoryLoaded && messages.map(message => {
            const [email, firstName, lastName] = message.author.split(' ');

            return (
              <Message
                name={message.author === identity ? i18n.t('You') : `${firstName} ${lastName}`}
                date={moment(message.dateUpdated).format('YYYY-MM-DD hh:mm')}
                message={message}
              />
            )
          })
        }
        <div ref={messagesEndRef} />
      </div>
      <div className={classes.inputSection}>
        <Box position="relative" flex={1} display="flex">
          <textarea value={message} className={classes.textArea} onChange={handleChangeMessage}></textarea>
          {
            attachedFile && (
              <div className={classes.attachment}>
                <span>{ attachedFile.name }</span>
                <Box display="flex" alignItems="center" onClick={handleClickCloseIcon}>
                  <CloseIcon className={classes.closeIcon} />
                </Box>
              </div>
            )
          }
        </Box>
        <IconButton className={classes.attachButton} onClick={handleClickAttachButton}>
          <AttachFileIcon/>
        </IconButton>
        <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={handleChangeFile}/>
        <GreenButton disabled={!twilioChatChannel} size="medium" width={140} onClick={handleClickSend}>
          <WhiteText>{i18n.t('Send')}</WhiteText>
        </GreenButton>
      </div>
    </div>
  );
};

export default ChatComponent;