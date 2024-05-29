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
import { PrimaryText, YellowText } from '../../Texts';
import SkeletonContainer from '../../SkeletonContainer';

import i18n from '../../../i18n';
import { Images } from '../../../styles';
import { emptifyObject } from '../../../utils';

import ImageUploader from './ImageUploader';

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

const GeneralForm = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    formData: {}
  });
  const [_, __, path] = window.location.pathname.split('/');
  const { config, name, objectId, dependencies, createMutation, deleteMutation, updateMutation, nameField } = props;

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

    if (name === 'activityEntry') {
      const activity = dependencies.activities.find(activity => activity.value === formData.activityId);
      const weight = dependencies.anthropometries.filter(anthropometry => anthropometry.weight).sort((a, b) => a.date < b.date)[0].weight;

      formData.energy = parseFloat(formData.amountMinutes * activity.metMinute * weight).toFixed(2);
    }

    if (objectId) {
      delete formData._id;
      updateMutation(parseInt(objectId), emptifyObject(formData)).then(() => props.onUpdate());
    } else {
      createMutation(formData).then(() => props.onCreate());
    }
  };

  const handleClickDelete = () => {
    deleteMutation({id: parseInt(objectId)}).then(() => {
      // props.router.push(`/administrator/${path}/new`);
      props.onDelete();
    });
  };

  const handleUploadFile = (body) => {
    handleChangeInput('imgUrl', body.fileName);
    handleChangeInput('imgDispName', body.originalName);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Box display="flex" justifyContent="space-between">
          {
            nameField ? (
              <SkeletonContainer isLoading={objectId && !state.formData} width={350} height={32}>
                <TextField
                  className={classes.formItem}
                  value={state.formData && (state.formData[nameField] || '')} 
                  onChange={(e) => handleChangeInput(nameField, e.target.value)}
                />
              </SkeletonContainer>
            ) : <div/>
          }
          <div>
            <OutlineButton size="small" width={120} className={classes.outlineButton} onClick={handleClickSave}>
              <img src={Images.ICON_SAVE}></img>
              <PrimaryText className={classes.outlineButtonText}>{i18n.t('Save')}</PrimaryText>
            </OutlineButton>
            {
              objectId && (
                <OutlineButton size="small" width={120} className={classes.outlineButton} onClick={handleClickDelete}>
                  <img src={Images.ICON_TIMES}></img>
                  <PrimaryText className={classes.outlineButtonText}>{i18n.t('Remove')}</PrimaryText>
                </OutlineButton>
              )
            }
            
          </div>
        </Box>
      </Card>
      {
        (path === 'recipes') && (
          <ImageUploader
            formData={state.formData}
            onUploadFile={handleUploadFile}
          />
        )
      }
      <Card className={classes.card}>
        {
          config.fields.filter(item => item.name !== nameField).map((item) => (
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
                      value={state.formData && state.formData[item.name]}
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
    </div>
  );
};

export default GeneralForm;