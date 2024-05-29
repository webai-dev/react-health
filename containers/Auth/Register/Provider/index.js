import React, { useState, useEffect } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  checkbox: {
    marginBottom: '2rem',
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

const Register = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: '',
    password: '',
    token: '',
    sharingId: '',
    acceptTerms: false,
  });
  const token = props.match.location.query.token;

  if (!token) {
    props.router.push('/provider/login');
  }
  
  useEffect(() => {
    if (token) {
      const decodedToken = atob(token);
      const [email, name, sharingId] = decodedToken.split('&');

      setState((prevState) => ({
        ...prevState,
        email,
        name,
        sharingId,
      }))
    }
  }, []);
  

  const handleChangeInput = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleClickRegister = () => {
    const { email, name, password } = state;
    const [firstName, lastName] = name.split(' ');

    setState((prevState) => ({
      ...prevState,
      isActivityIndicatorVisible: true,
    }));

    const user = {
      firstName,
      lastName,
      email: email.trim(),
      password,
    };

    fetch(process.env.REACT_APP_REST_API_URL + '/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Role: 'PROVIDER',
        SharingToken: token,
      },
      body: JSON.stringify(user),
    })
      .then(async res => {
        if (res.ok) {
          return res.json();
        } else {
          const error = await res.json();

          setState((prevState) => ({
            ...prevState,
            isActivityIndicatorVisible: false,
          }));
          throw Error(error.error.message);
        }
      })
      .then(res => {
        setState((prevState) => ({
          ...prevState,
          isActivityIndicatorVisible: false,
        }));

        props.router.push('/provider/login');
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
          disabled
          className={classes.input}
          value={state.email} 
          placeholder={i18n.t('Email')}
          onChange={(e) => handleChangeInput('email', e.target.value)}
        />
        <MainInput
          className={classes.input}
          value={state.name} 
          placeholder={i18n.t('Name')}
          onChange={(e) => handleChangeInput('name', e.target.value)}
        />
        <MainInput 
          className={classes.input}
          value={state.password} 
          placeholder={i18n.t('Password')}
          type="password"
          onChange={(e) => handleChangeInput('password', e.target.value)}
        />
        <FormControlLabel
          className={classes.checkbox}
          control={
            <Checkbox 
              checked={state.acceptTerms} 
              name="acceptTerms" 
              onChange={(e) => handleChangeInput('acceptTerms', e.target.checked)} 
            />
          }
          label={
            <PrimaryText>
              {i18n.t('I accept the user agreement')}
            </PrimaryText>
          }
        />
        <PrimaryButton
          disabled={!state.name || !state.password || !state.acceptTerms}
          size="large"
          width={200}
          className={classes.loginButton}
          onClick={handleClickRegister}
        >
          <WhiteText>{i18n.t('Register')}</WhiteText>
        </PrimaryButton>
        <Link to='/provider/login'>
          <PrimaryText size="large">
            {i18n.t('Login')}
          </PrimaryText>
        </Link>
      </div>
    </div>
  );
};

export default Register;