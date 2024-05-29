import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

import { PrimaryText, GreenText, BlackText } from '../../../../../components';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    borderRadius: 6,
    margin: '1rem 0.5rem',
    padding: '1rem',
  },
  image: {
    maxWidth: '100%',
  }
}));

const Message = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState();
  const { name, date, message } = props;

  return (
    <Card className={classes.card}>
      <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="0.5rem">
        <GreenText size="message-info">{name}</GreenText>
        <BlackText size="message-info">{date}</BlackText>
      </Box>
      {
        message.type === 'text' && (
          <PrimaryText size="message">{message.body}</PrimaryText>
        )
      }
      {
        message.type === 'media' && (
          <React.Fragment>
            {
              message.media.contentType.startsWith('image') ? (
                <img className={classes.image} src={message.url}/>
              ) : (
                <a href={message.url} target="_blank">
                  <PrimaryText size="message">{message.media.filename}</PrimaryText>
                </a>
              )
            }
          </React.Fragment>
        )
      }
    </Card>
  );
};

export default Message;