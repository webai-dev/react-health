import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import { TableInput } from '../../../../../components/Inputs';
import i18n from '../../../../../i18n';

import UpdateUserMutation from '../../../../../mutations/UpdateUserMutation';

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    cursor: 'pointer',
    margin: '0 8px',
  },
}));

const ProfileItem = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({
    edit: false,
    value: '',
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      value: props.value,
    }))
  }, []);

  const handleClickChange = () => {
    setState((prevState) => ({
      ...prevState,
      edit: true,
      value: props.inputType === 'password' ? '' : state.value,
    }));
  };

  const handleChangeValue = (e) => {
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      value,
    }));
  };

  const handleClickSave = async () => {
    if (props.name === 'password') {
      const token = await localStorage.getItem('access_token');

      fetch(process.env.REACT_APP_REST_API_URL + '/users/reset-password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          email: props.email,
          password: state.value,
        }),
      });
    } else {
      UpdateUserMutation(props.userId, {
        [props.name]: state.value,
      });
    }

    setState((prevState) => ({
      ...prevState,
      edit: false,
      value: props.inputType ? '********' : state.value, 
    }));
  };

  const handleClickCancel = () => {
    setState((prevState) => ({
      ...prevState,
      edit: false,
      value: props.value,
    }));
  };

  return (
    <Box display="flex" alignItems="center" fontSize={16} margin="12px 0">
      <Box width="50%" color="#888">
        {props.title}:
      </Box>
      <Box display="flex" justifyContent="space-between" width="50%">
        {
          state.edit ? (
            <TableInput type={props.inputType || 'text'} onChange={handleChangeValue} value={state.value}/>
          ) : (
            <div><strong>{state.value}</strong></div>
          )
        }
        {
          !props.readonly && (
            <React.Fragment>
              {
                state.edit ? (
                  <Box display="flex">
                    <div className={classes.button} onClick={handleClickSave}>{i18n.t('Save')}</div>
                    <div className={classes.button} onClick={handleClickCancel}>{i18n.t('Cancel')}</div>
                  </Box>
                ) : (
                  <div className={classes.button} onClick={handleClickChange}>{i18n.t('Change')}</div>
                )
              }
            </React.Fragment>
          )
        }
      </Box>
    </Box>
  );
};

export default ProfileItem;