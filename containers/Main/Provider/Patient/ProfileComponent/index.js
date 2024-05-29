import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { GreenText, GrayText } from '../../../../../components';
import i18n from '../../../../../i18n';

const useStyles = makeStyles(theme => ({
  root: {},
  label: {
    width: 200,
  },
  row: {
    display: 'flex',
  }
}));

const ProfileComponent = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState();
  const { user, anthropometries, diabetes, lifestyles } = props;

  return (
    <div className={classes.root}>
      <GreenText>{i18n.t('Profile')}</GreenText>
      <Box marginTop="1rem">
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('E-mail')}:</GrayText>
          <GrayText>{user && user.email}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Telephone number')}:</GrayText>
          <GrayText>{user && user.cellPhone}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Sex')}:</GrayText>
          <GrayText>{user && user.userBaseline.sex}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Date of Birth')}:</GrayText>
          <GrayText>{user && user.birthDate}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Height')}:</GrayText>
          <GrayText>{anthropometries && anthropometries[0].height}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Weight')}:</GrayText>
          <GrayText>{anthropometries && anthropometries.filter(anthropometry => anthropometry.weight)[0].weight}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Target Weight')}:</GrayText>
          <GrayText>{user && user.userBaseline.aimGoalWeight}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Types of diabetes')}:</GrayText>
          <GrayText>{diabetes && diabetes[0].diabetesStatus}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Activity level')}:</GrayText>
          <GrayText>{lifestyles && lifestyles.filter(lifestyle => lifestyle.exerciseLevel)[0].exerciseLevel}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Preferred Diet')}:</GrayText>
          <GrayText>{lifestyles && lifestyles.filter(lifestyle => lifestyle.dietType)[0].dietType}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Smartwatch')}:</GrayText>
          <GrayText>{user && user.userBaseline.useSmartWatch ? 'Yes' : 'No'}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Insulin Pump')}:</GrayText>
          <GrayText>{user && user.userBaseline.usePump ? 'Yes' : 'No'}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('CGM')}:</GrayText>
          <GrayText>{user && user.userBaseline.useCgm ? 'Yes' : 'No'}</GrayText>
        </div>
        <div className={classes.row}>
          <GrayText className={classes.label}>{i18n.t('Glucosestickor')}:</GrayText>
          <GrayText>{user && (user.userBaseline.useStrips ? 'Yes' : 'No')}</GrayText>
        </div>
      </Box>
    </div>
  );
};

export default ProfileComponent;