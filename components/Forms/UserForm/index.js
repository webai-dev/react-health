import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import { OutlineButton } from '../../Buttons';
import { PrimaryText, SecondaryText, YellowText } from '../../Texts';
import SkeletonContainer from '../../SkeletonContainer';

import i18n from '../../../i18n';
import { Images } from '../../../styles';
import { emptifyObject } from '../../../utils';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    padding: '1.5rem 2rem',
    marginTop: '1rem',
  },
  formItem: {
    width: 350,
  },
  formItemLabel: {
    width: 250,
  },
  imageText: {
    margin: '0 3rem 0 2rem',
  },
  outlineButton: {
    padding: 0,
    marginLeft: '1rem',
  },
  outlineButtonText: {
    marginLeft: '0.5rem',
  },
}));

const UserForm = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    formData: {}
  });
  const [_, __, path] = window.location.pathname.split('/');
  const { config, name, title, objectId, dependencies, createMutation, deleteMutation, updateMutation } = props;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      formData: props.formData
    }));
  }, [props.formData]);

  const handleChangeInput = (key, value) => {
    let { formData } = state;

    if (formData) {
      formData[key] = value;
    } else {
      formData = { [key]: value };
    }

    setState((prevState) => ({
      ...prevState,
      formData
    }));
  };

  const handleClickSave = () => {
    const { formData } = state;
    const data = {};
    
    config.fields.forEach(item => {
      data[item.name] = formData[item.name];
    });

    if (objectId) {
      data.id = formData._id;
      updateMutation(parseInt(objectId), emptifyObject(data)).then(() => props.onUpdate && props.onUpdate());
    } else {
      createMutation(data).then(() => props.onCreate());
    }
  };

  const handleClickDelete = () => {
    deleteMutation({id: parseInt(objectId)}).then(() => {
      props.onDelete && props.onDelete();
      // props.router.push(`/administrator/${path}/new`);
    });
  };

  // config.fields.forEach((field) => {
  //   if (field.type === 'checkbox') {
  //     console.log(state.formData[field.name]);
  //   }
  // })

  return (
    <div className={classes.root}>
      {
        objectId && (
          <React.Fragment>
            <Card className={classes.card}>
              <Box display="flex" justifyContent="space-between" marginBottom="1rem">
                <SecondaryText size="subtitle">{title}</SecondaryText>
                <div>
                  <OutlineButton size="small" width={120} className={classes.outlineButton} onClick={handleClickSave}>
                    <img src={Images.ICON_SAVE}></img>
                    <PrimaryText className={classes.outlineButtonText}>{i18n.t('Save')}</PrimaryText>
                  </OutlineButton>
                  {
                    objectId && name !== 'user' && name !== 'userBaseline' && (
                      <OutlineButton size="small" width={120} className={classes.outlineButton} onClick={handleClickDelete}>
                        <img src={Images.ICON_TIMES}></img>
                        <PrimaryText className={classes.outlineButtonText}>{i18n.t('Remove')}</PrimaryText>
                      </OutlineButton>
                    )
                  }
                  
                </div>
              </Box>
              {
                config.fields.map((item) => (
                  <Box display="flex" alignItems="center" height={60}>
                    <PrimaryText className={classes.formItemLabel}>{item.title}</PrimaryText>
                    {
                      item.type === 'input' && (
                        <SkeletonContainer isLoading={objectId && !state.formData} width={350} height={32}>
                          <TextField
                            className={classes.formItem}
                            value={state.formData && (state.formData[item.name] || '')} 
                            onChange={(e) => handleChangeInput(item.name, e.target.value)}
                          />
                        </SkeletonContainer>
                      )
                    }
                    {
                      item.type === 'select' && (
                        <SkeletonContainer isLoading={objectId && !state.formData} width={350} height={32}>
                          <Select 
                            className={classes.formItem} 
                            value={state.formData && parseInt(state.formData[item.name])}
                            onChange={(e) => handleChangeInput(item.name, e.target.value)}
                          >
                            {
                              (dependencies[item.data] || []).map((item) => <MenuItem value={item.value}>{item.label}</MenuItem>)
                            }
                          </Select>
                        </SkeletonContainer>
                      )
                    }
                    {
                      item.type === 'checkbox' && (
                        <SkeletonContainer isLoading={objectId && !state.formData} width={350} height={32}>
                          <Checkbox
                            checked={state.formData && state.formData[item.name] || false}
                            onChange={(e) => handleChangeInput(item.name, e.target.checked)}
                          />
                        </SkeletonContainer>
                      )
                    }
                  </Box>
                ))
              }
            </Card>
          </React.Fragment>
        )
      }
    </div>
  );
};

export default UserForm;