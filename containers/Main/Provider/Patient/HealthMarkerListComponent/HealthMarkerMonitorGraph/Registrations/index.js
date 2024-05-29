import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import { PrimaryText, GrayText } from '../../../../../../../components';
import i18n from '../../../../../../../i18n';

const useStyles = makeStyles(theme => ({
  root: {},
  list: {
    padding: '0.5rem 0',
    overflowY: 'auto',
    height: 220,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
  }
}));

const Registrations = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState();
  const { registrations, fieldName, healthMarker } = props;

  const registrationValues = registrations.map((registration) => registration[fieldName]);
  const sum = registrationValues.reduce((a, b) => a + b, 0);
  const average = registrations.length ? sum / registrations.length : 0;
  const min = registrationValues.length ? Math.min(...registrationValues) : 0;
  const max = registrationValues.length ? Math.max(...registrationValues) : 0;

  return (
    <div className={classes.root}>
      <PrimaryText size="subtitle">Registered values</PrimaryText>
      <div className={classes.list}>
        {registrations.map(registration => (
          <div className={classes.listItem} display="flex" alignItems="center" justifyContent="space-between" padding="0.5rem 0">
            <GrayText>{moment(registration.date).format('YYYY-MM-DD hh:mm')}</GrayText>
            <GrayText>{parseFloat(registration[fieldName] || 0).toFixed(2)} {healthMarker.unit}</GrayText>
          </div>
        ))}
      </div>
      <Divider/>

      <Box textAlign="right" marginTop="1rem">
        <GrayText>{i18n.t('Average')}: {parseFloat(average).toFixed(2)} {healthMarker.unit}</GrayText>
        <GrayText>{i18n.t('Max')}: {parseFloat(max).toFixed(2)} {healthMarker.unit}</GrayText>
        <GrayText>{i18n.t('Min')}: {parseFloat(min).toFixed(2)} {healthMarker.unit}</GrayText>
      </Box>
    </div>
  );
};

export default Registrations;