import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { QueryRenderer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { PrimaryText } from '../../../../../../components';
import environment from '../../../../../../relay-environment';

import Chart from './Chart';
import Registrations from './Registrations';

const HealthMarkerMonitorGraphQuery = graphql`
  query HealthMarkerMonitorGraphQuery {
    viewer {
      _id: id
    }
    
  }
`;

const HealthMarkerMonitorGraphGlucoseManualQuery = graphql`
  query HealthMarkerMonitorGraphGlucoseManualQuery($filter: GlucoseManualsFilterInput) {
    glucoseManuals(glucoseManualsFilter: $filter) {
      _id: id
      glucoseRandom
      glucoseFasting
      glucoseBBreakfast
      glucoseABreakfast
      glucoseBLunch
      glucoseALunch
      glucoseBDinner
      glucoseADinner
      hba1c
      date
    }
  }
`;

const HealthMarkerMonitorGraphGlucoseDeviceQuery = graphql`
  query HealthMarkerMonitorGraphGlucoseDeviceQuery($filter: GlucoseDevicesFilterInput) {
    glucoseDevices(glucoseDevicesFilter: $filter) {
      _id: id
      glucose
      date
    }
  }
`;

const HealthMarkerMonitorGraphCholesterolQuery = graphql`
  query HealthMarkerMonitorGraphCholesterolQuery($filter: CholesterolsFilterInput) {
    cholesterols(cholesterolsFilter: $filter) {
      _id: id
      ldlChol
      totalChol
      hdlChol
      triglycerides
      date
    }
  }
`;

const HealthMarkerMonitorGraphAnthropometryQuery = graphql`
  query HealthMarkerMonitorGraphAnthropometryQuery($filter: AnthropometriesFilterInput) {
    anthropometries(anthropometriesFilter: $filter) {
      _id: id
      weight
      waist
      bmi
      arms
      chest
      date
    }
  }
`;

const HealthMarkerMonitorGraphCalorieQuery = graphql`
  query HealthMarkerMonitorGraphCalorieQuery($filter: CaloriesFilterInput) {
    calories(caloriesFilter: $filter) {
      _id: id
      burned
      consumed
      carbohydrates
      fat
      protein
      waterConsumption
      date
    }
  }
`;

const HealthMarkerMonitorGraphKidneyQuery = graphql`
  query HealthMarkerMonitorGraphKidneyQuery($filter: KidneysFilterInput) {
    kidneys(kidneysFilter: $filter) {
      _id: id
      ualbkrea
      creatinine
      egfr
      date
    }
  }
`;

const HealthMarkerMonitorGraphBloodPressureQuery = graphql`
  query HealthMarkerMonitorGraphBloodPressureQuery($filter: BloodPressuresFilterInput) {
    bloodPressures(bloodPressuresFilter: $filter) {
      _id: id
      systolic
      diastolic
      date
    }
  }
`;

const HealthMarkerMonitorGraphInsulinInjectionQuery = graphql`
  query HealthMarkerMonitorGraphInsulinInjectionQuery($filter: InsulinInjectionsFilterInput) {
    insulinInjections(insulinInjectionsFilter: $filter) {
      _id: id
      dose
      fastActing
      longActing
      date
    }
  }
`;

const HealthMarkerMonitorGraphExerciseQuery = graphql`
  query HealthMarkerMonitorGraphExerciseQuery($filter: ExercisesFilterInput) {
    exercises(exercisesFilter: $filter) {
      _id: id
      restingHeartRate
      date
    }
  }
`;

const HealthMarkerMonitorGraphStepQuery = graphql`
  query HealthMarkerMonitorGraphStepQuery($filter: StepsFilterInput) {
    steps(stepsFilter: $filter) {
      _id: id
      steps
      training
      stressSmartWatch
      sleepSmartWatch
      restingHeartRate
      date
    }
  }
`;

const HealthMarkerMonitorGraphHealthMarkerExtraQuery = graphql`
  query HealthMarkerMonitorGraphHealthMarkerExtraQuery($filter: HealthMarkerExtrasFilterInput) {
    healthMarkerExtras(healthMarkerExtrasFilter: $filter) {
      _id: id
      date
      carbohydrates
      protein
      fat
      training
      waterConsumption
      longActing
      fastActing
      armsChest
      stressSmartWatch
      sleepSmartWatch
    }
  }
`;

const queries = {
  HealthMarkerMonitorGraphGlucoseManualQuery,
  HealthMarkerMonitorGraphGlucoseDeviceQuery,
  HealthMarkerMonitorGraphCholesterolQuery,
  HealthMarkerMonitorGraphAnthropometryQuery,
  HealthMarkerMonitorGraphCalorieQuery,
  HealthMarkerMonitorGraphKidneyQuery,
  HealthMarkerMonitorGraphBloodPressureQuery,
  HealthMarkerMonitorGraphInsulinInjectionQuery,
  HealthMarkerMonitorGraphExerciseQuery,
  HealthMarkerMonitorGraphStepQuery,
  HealthMarkerMonitorGraphHealthMarkerExtraQuery,
};

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    borderRadius: 17,
    padding: '1.5rem 2rem',
    marginTop: '2rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    ['@media (max-width: 1500px)']: {
      flexDirection: 'column',
    }
  }
}));

const HealthMarkerMonitorGraph = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({
    fromDate: moment().add(-7, 'days'),
    toDate: moment(),
  });
  const { healthMarker, healthMarkerMonitor, healthMarkerMonitorInterval } = props;
  const { fromDate, toDate } = state;

  if (!healthMarker) {
    return null;
  }
  
  const [modelName, fieldName] = healthMarker.reference.split('.');

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
      query={queries['HealthMarkerMonitorGraph' + modelName + 'Query']}
      variables={{
        filter: {
          where: {
            and: [
              { 'date': { 'gte': moment(fromDate).startOf('day').format() } },
              { 'date': { 'lte': moment(toDate).endOf('day').format() } },
              { 'userId': healthMarkerMonitor.userId }
            ]
          }
        }
      }}
      render={({error, props: relayProps}) => {
        if (relayProps) {
          const registrations = relayProps[Object.keys(relayProps)[0]].filter(registration => registration[fieldName]);

          return (
            <Card className={classes.card}>
              <PrimaryText size="subtitle">{healthMarker.marker}</PrimaryText>

              <Box className={classes.container}>
                <div>
                  <Chart
                    fromDate={fromDate}
                    toDate={toDate}
                    fieldName={fieldName}
                    healthMarkerMonitor={healthMarkerMonitor}
                    healthMarkerMonitorInterval={healthMarkerMonitorInterval}
                    registrations={registrations}
                    onClickPrevDate={handleClickPrevDate}
                    onClickNextDate={handleClickNextDate}
                  />
                </div>
                <Box flex={1}>
                  <Registrations
                    fieldName={fieldName}
                    healthMarker={healthMarker}
                    registrations={registrations}
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

export default HealthMarkerMonitorGraph;