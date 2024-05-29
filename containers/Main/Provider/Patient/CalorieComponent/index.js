import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import { GreenText, GrayText } from '../../../../../components';
import i18n from '../../../../../i18n';

import CalorieGraph from './CalorieGraph';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem',
  },
  title: {
    marginBottom: '1rem',
  }
}));

const CalorieComponent = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({});

  return (
    <div className={classes.root}>
      <GreenText size="subtitle" className={classes.title}>{i18n.t('Calories')}</GreenText>
      <CalorieGraph sharerId={props.sharerId}/>
    </div>
  );
};

export default CalorieComponent;