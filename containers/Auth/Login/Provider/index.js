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
  },
  loginButton: {
    marginBottom: '2rem',
  },
  logo: {
    margin: '2rem 0',
  },
}));

const Login = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (key, e) => {
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleClickLogin = () => {
    const { email, password } = state;
    
    fetch(process.env.REACT_APP_REST_API_URL + '/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        password,
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
        if (res.success === true) {
          setState((prevState) => ({
            ...prevState,
            isActivityIndicatorVisible: false,
          }));

          localStorage.setItem('access_token', res.token);
          props.router.push('/provider/overview');
        } else {
          setState((prevState) => ({
            ...prevState,
            isActivityIndicatorVisible: false,
          }));
        }
      })
      .catch(e => {
        const msg = e.message;
        setState((prevState) => ({
          ...prevState,
          isActivityIndicatorVisible: false,
        }));
      });
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <PrimaryText size="title">{i18n.t('Provider')}</PrimaryText>
        <img className={classes.logo} src={Images.IMAGE_LOGO}/>
        <MainInput
          className={classes.input}
          value={state.email} 
          placeholder={i18n.t('Username')}
          onChange={(e) => handleChangeInput('email', e)}
        />
        <MainInput 
          className={classes.input}
          value={state.password} 
          placeholder={i18n.t('Password')}
          type="password"
          onChange={(e) => handleChangeInput('password', e)}
        />
        <PrimaryButton 
          size="large"
          width={200}
          className={classes.loginButton}
          onClick={handleClickLogin}
        >
          <WhiteText>{i18n.t('Login')}</WhiteText>
        </PrimaryButton>
        <Link to='/provider/forgot-password'>
          <PrimaryText size="large">
            {i18n.t('Forgot Password')}?
          </PrimaryText>
        </Link>
      </div>
    </div>
  );
};

export default Login;