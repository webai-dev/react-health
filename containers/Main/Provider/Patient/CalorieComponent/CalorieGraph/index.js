import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import {
  Line, XAxis, YAxis, Tooltip, Area, ComposedChart, LineChart, Legend
} from 'recharts';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { PrimaryText } from '../../../../../../components';
import DateRangePicker from '../../../../../../components/DateRangePicker';
import i18n from '../../../../../../i18n';
import environment from '../../../../../../relay-environment';

const CalorieGraphCaloriesQuery = graphql`
  query CalorieGraphCaloriesQuery($filter: CaloriesFilterInput) {
    calories(caloriesFilter: $filter) {
      _id: id
      burned
      consumed
      date
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    borderRadius: 17,
    padding: '1.5rem 2rem',
    marginTop: '2rem',
  }
}));

const CalorieGraph = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({
    fromDate: moment().add(-7, 'days'),
    toDate: moment(),
  });
  const { healthMarker, healthMarkerMonitor, healthMarkerMonitorInterval } = props;
  const { fromDate, toDate } = state;
  const data = [];

  const handleClickPrevDate = () => {
    setState((prevState) => ({
      ...prevState,
      fromDate: moment(fromDate).add(-1, 'day'),
    }));
  };

  const handleClickNextDate = () => {
    setState((prevState) => ({
      ...prevState,
      toDate: moment(toDate).add(1, 'day'),
    }));
  };

  return (
    <QueryRenderer
      environment={environment}
      query={CalorieGraphCaloriesQuery}
      variables={{
        filter: {
          where: {
            and: [
              { 'date': { 'gte': moment(fromDate).startOf('day').format() } },
              { 'date': { 'lte': moment(toDate).endOf('day').format() } },
              { 'userId': props.sharerId }
            ]
          }
        }
      }}
      render={({error, props: relayProps}) => {
        if (relayProps) {
          const { calories } = relayProps;
          const data = [];

          for (let d = moment(fromDate); d <= moment(toDate); d = moment(d).add(1, 'day')) {
            const items = calories.filter(calorie => moment(calorie.date).format('YYYY-MM-DD') === moment(d).format('YYYY-MM-DD'))
            
            data.push({
              date: moment(d).format('DD'),
              consumed: items.length ? items.map(item => item.consumed).reduce((a, b) => a + b, 0) : null,
              burned: items.length ? items.map(item => item.burned).reduce((a, b) => a + b, 0) : null,
            });
          }

          return (
            <Card className={classes.card}>
              <Box width={800}>
                <LineChart
                  width={800}
                  height={300}
                  data={data}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <Legend layout="vertical" align="left" verticalAlign="top" iconType="circle"/>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="consumed" stroke="#A3A0FB" fill="#A3A0FB" dot={{ r: 4 }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="burned" stroke="#FF9C67" fill="#FF9C67" dot={{ r: 4 }} activeDot={{ r: 8 }} />
                </LineChart>
                <Box marginLeft={22} marginRight={3}>
                  <DateRangePicker
                    fromDate={fromDate}
                    toDate={toDate}
                    onClickPrevDate={handleClickPrevDate}
                    onClickNextDate={handleClickNextDate}
                  />
                </Box>
              </Box>
            </Card>
          );
        }
      }}
    />
  );
};

export default CalorieGraph;