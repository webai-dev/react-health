import React, { useState } from 'react';
import {
  Line, XAxis, YAxis, Tooltip, Area, ComposedChart,
} from 'recharts';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import DateRangePicker from '../../../../../../../components/DateRangePicker';
import { PrimaryText } from '../../../../../../../components';
import i18n from '../../../../../../../i18n';

import CreateHealthMarkerMonitorIntervalMutation from '../../../../../../../mutations/CreateHealthMarkerMonitorIntervalMutation';
import UpdateHealthMarkerMonitorIntervalMutation from '../../../../../../../mutations/UpdateHealthMarkerMonitorIntervalMutation';

let timeoutId = null;

const useStyles = makeStyles(theme => ({
  root: {
    width: 600,
  },
  rangeInput: {
    width: 100,
    height: 40,
    textAlign: 'center',
    borderRadius: 15,
    outline: 'none',
    border: '1px solid #707070',
    margin: '0 0.5rem',
  },
}));


const Chart = (props: Object) => {
  const [state, setState] = useState({
    lowerTarget: props.healthMarkerMonitorInterval && props.healthMarkerMonitorInterval.lowerTarget,
    upperTarget: props.healthMarkerMonitorInterval && props.healthMarkerMonitorInterval.upperTarget,
    healthMarkerMonitorInterval: props.healthMarkerMonitorInterval,
  });
  const { fromDate, toDate, registrations, fieldName, healthMarkerMonitor } = props;
  const { lowerTarget, upperTarget, healthMarkerMonitorInterval } = state;
  const classes = useStyles(props);
  const data = [];
  let rangePercent = 0;

  if (upperTarget && lowerTarget) {
    const rangeRegistrations = registrations.filter(registration => registration[fieldName] <= upperTarget && registration[fieldName] >= lowerTarget);
    rangePercent = parseFloat(rangeRegistrations.length / registrations.length * 100 || 0).toFixed(0);
  }

  for (let d = moment(fromDate); d <= moment(toDate); d = moment(d).add(1, 'day')) {
    const items = registrations.filter(registration => moment(registration.date).format('YYYY-MM-DD') === moment(d).format('YYYY-MM-DD'))
    
    data.push({
      date: moment(d).format('DD'),
      [fieldName]: items.length ? items.map(item => item[fieldName]).reduce((a, b) => a + b, 0) : null,
      lowerTarget,
      upperTarget: upperTarget && lowerTarget ? (parseFloat(upperTarget) - parseFloat(lowerTarget)) : null
    });
  }

  const handleChangeInput = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
        if (!healthMarkerMonitorInterval) {
          CreateHealthMarkerMonitorIntervalMutation({
            userId: healthMarkerMonitor.userId,
            providerId: healthMarkerMonitor.providerId,
            healthMarkerMonitorId: healthMarkerMonitor._id,
            lowerTarget: parseFloat(value),
          }).then((id) => {
            setState((prevState) => ({
              ...prevState,
              healthMarkerMonitorInterval: {
                _id: id,
                [key]: value,
              }
            }))
          });
        } else {
          UpdateHealthMarkerMonitorIntervalMutation(healthMarkerMonitorInterval._id, {
            [key]: parseFloat(value),
          });
        }
    }, 1000);
  };

  return (
    <div className={classes.root}>
      <ComposedChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 0, bottom: 5,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={fieldName} stroke="#8884d8" fill="#8884d8" dot={{ r: 4 }} activeDot={{ r: 8 }} />
        <Area type="monotone" dataKey="lowerTarget" stackId="1" stroke="rgba(0, 0, 0, 0)" fill="rgba(0, 0, 0, 0)" />
        <Area type="monotone" dataKey="upperTarget" stackId="1" stroke="rgba(255, 207, 118, 0.54)" fill="rgba(255, 207, 118, 0.54)" />
      </ComposedChart>
      <Box marginLeft={8} marginRight={3}>
        <DateRangePicker
          fromDate={fromDate}
          toDate={toDate}
          onClickPrevDate={props.onClickPrevDate}
          onClickNextDate={props.onClickNextDate}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="1rem">
        <Box display="flex" alignItems="center">
          <Box marginRight="1rem">
            <PrimaryText size="small">{i18n.t('Enter target range')}</PrimaryText>
          </Box>
          <input 
            className={classes.rangeInput} 
            value={state.lowerTarget} 
            placeholder="min"
            type="number"
            onChange={(e) => handleChangeInput('lowerTarget', e.target.value)}
          />
          <input 
            className={classes.rangeInput} 
            value={state.upperTarget} 
            placeholder="max"
            type="number"
            onChange={(e) => handleChangeInput('upperTarget', e.target.value)}
          />
        </Box>
        {
          lowerTarget && upperTarget && (
            <PrimaryText size="small">{i18n.t('Share value within range')}: {rangePercent}%</PrimaryText>
          )
        }
      </Box>
        
    </div>
  );
}

export default Chart;