import React, { useState } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import i18n from '../../../../i18n';

import { MainInput, Link, PrimaryButton, PrimaryText, WhiteText } from '../../../../components';
import { Dimensions, Images } from '../../../../styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:  '100%',
  },
  content: {
    width: Dimensions.DIMENSION_LOGIN_FORM_WIDTH,
    textAlign: 'center',
  },
  input: {
    marginBottom: '2rem',
    boxSizing: 'border-box',
  },
  logo: {
    margin: '2rem 0',
  },
  returnLogin: {
    marginTop: '2rem',
  },
}));

const SendEmail = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: '',
    password: '',
    isResetEmailSending: false,
    isResetEmailSent: false,
  });

  const handleChangeInput = (key, e) => {
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleClickSendEmail = () => {
    const { email } = state;
    
    setState((prevState) => ({
      ...prevState,
      isResetEmailSending: true,
    }));

    fetch(process.env.REACT_APP_REST_API_URL + '/password-reset-requests', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
      }),
    })
      .then(async res => {
        if (res.ok) {
          return res.json();
        } else {
          const error = await res.json();
          throw Error(error.error.message);
        }
      })
      .then(async(res) => {
        setState((prevState) => ({
          ...prevState,
          isResetEmailSending: false,
          isResetEmailSent: true,
        }));
        // if (res.success === true) {
        //   setState((prevState) => ({
        //     ...prevState,
        //     isResetEmailSending: false,
        //     isResetEmailSent: true,
        //   }));
        // } else {
        //   setState((prevState) => ({
        //     ...prevState,
        //     isResetEmailSending: false,
        //   }));
        // }
      })
      .catch(e => {
        const msg = e.message;
        setState((prevState) => ({
          ...prevState,
          isResetEmailSending: false,
          isResetEmailSent: true,
        }));
      });
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <PrimaryText size="title">{i18n.t('Administrator')}</PrimaryText>
        <img className={classes.logo} src={Images.IMAGE_LOGO}/>
        {
          state.isResetEmailSent ? (
            <React.Fragment>
              <PrimaryText size="medium">Password reset link was sent to the email.</PrimaryText>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <MainInput
                className={classes.input}
                value={state.email} 
                placeholder={i18n.t('Email')}
                onChange={(e) => handleChangeInput('email', e)}
              />
              <PrimaryButton 
                size="large"
                width={200}
                className={classes.sendEmailButton}
                onClick={handleClickSendEmail}
                disabled={state.isResetEmailSending}
              >
                <WhiteText>{i18n.t('Send Email')}</WhiteText>
              </PrimaryButton>
            </React.Fragment>
          )
        }
        <Link to='/administrator/login'>
          <PrimaryText size="large" className={classes.returnLogin}>
            {i18n.t('Return to Login')}
          </PrimaryText>
        </Link>
      </div>
    </div>
  );
};

export default SendEmail;