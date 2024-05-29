import React, { useState } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import i18n from '../../../../i18n';

import { MainInput, Link, ErrorText, PrimaryButton, PrimaryText, WhiteText } from '../../../../components';
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
  errorText: {
    marginBottom: '2rem',
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

const ChangePassword = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    password: '',
    confirmPassword: '',
    isResetRequestSending: false,
    isResetRequestSent: false,
  });
  const [_, role] = window.location.pathname.split('/');

  const handleChangeInput = (key, e) => {
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      [key]: value,
      errorMessage: '',
    }));
  };

  const handleClickResetPassword = () => {
    const { password, confirmPassword } = state;
    const token = props.match.location.query.token;
    const email = atob(token);
    
    
    if (password !== confirmPassword) {
      setState((prevState) => ({
        ...prevState,
        errorMessage: 'Password mismatch',
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        isResetEmailSending: true,
      }));
  
      fetch(process.env.REACT_APP_REST_API_URL + '/users/reset-password', {
        method: 'POST',
        headers: { 
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password: password.trim(),
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
            isResetRequestSending: false,
            isResetRequestSent: true,
          }));

          props.router.push(`/${role}/login`);
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
            isResetRequestSending: false,
            isResetRequestSent: true,
          }));
        });
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <PrimaryText size="title">{i18n.t('Administrator')}</PrimaryText>
        <img className={classes.logo} src={Images.IMAGE_LOGO}/>
        <MainInput
          className={classes.input}
          value={state.password} 
          placeholder={i18n.t('Password')}
          type="password"
          onChange={(e) => handleChangeInput('password', e)}
        />
        <MainInput
          className={classes.input}
          value={state.confirmPassword} 
          placeholder={i18n.t('Confirm Password')}
          type="password"
          onChange={(e) => handleChangeInput('confirmPassword', e)}
        />
        {
          state.errorMessage && <ErrorText className={classes.errorText}>{state.errorMessage}</ErrorText>
        }
        <PrimaryButton 
          size="large"
          width={200}
          onClick={handleClickResetPassword}
          disabled={state.isResetEmailSending}
        >
          <WhiteText>{i18n.t('Reset Password')}</WhiteText>
        </PrimaryButton>
        <Link to='/administrator/login'>
          <PrimaryText size="large" className={classes.returnLogin}>
            {i18n.t('Return to Login')}
          </PrimaryText>
        </Link>
      </div>
    </div>
  );
};

export default ChangePassword;