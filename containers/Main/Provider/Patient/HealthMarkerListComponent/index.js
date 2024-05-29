import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import { GreenText, GrayText } from '../../../../../components';
import { cloneObject } from '../../../../../utils';
import CreateHealthMarkerMonitorMutation from '../../../../../mutations/CreateHealthMarkerMonitorMutation';
import UpdateHealthMarkerMonitorMutation from '../../../../../mutations/UpdateHealthMarkerMonitorMutation';
import i18n from '../../../../../i18n';

import Header from './HealthMarkerListHeader';
import HealthMarkerMonitorGraph from './HealthMarkerMonitorGraph';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem',
  },
  title: {
    marginBottom: '1rem',
  }
}));

const HealthMarkerListComponent = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({
    healthMarkerMonitors: [],
  });
  const { sharerId, providerId, viewer } = props;
  const { healthMarkerMonitors } = state;

  useEffect(() => {
    if (viewer) {
      setState((prevState) => ({
        ...prevState,
        healthMarkerMonitors: cloneObject(viewer.healthMarkerMonitors),
      }));
    }
  }, [viewer && viewer.healthMarkerMonitors]);

  const handleClickAddGraph = () => {
    const { healthMarkerMonitors } = state;

    healthMarkerMonitors.push({ userId: sharerId, providerId });
    setState((prevState) => ({
      ...prevState,
      healthMarkerMonitors,
    }));
  };

  const handleChangeHealthMarkerMonitor = (healthMarkerMonitorIndex, healthMarkerMonitorId, healthMarkerId) => {
    const { healthMarkerMonitors } = state;

    healthMarkerMonitors[healthMarkerMonitorIndex].healthMarkerId = healthMarkerId;

    if (healthMarkerMonitorId) {
      UpdateHealthMarkerMonitorMutation(healthMarkerMonitorId, healthMarkerMonitors[healthMarkerMonitorIndex]);
    } else {
      CreateHealthMarkerMonitorMutation(healthMarkerMonitors[healthMarkerMonitorIndex]).then((id) => {
        healthMarkerMonitors[healthMarkerMonitorIndex] = {
          _id: id,
          ...healthMarkerMonitors[healthMarkerMonitorIndex]
        };

        setState((prevState) => ({
          ...prevState,
          healthMarkerMonitors,
        }));
      });
    }

    setState((prevState) => ({
      ...prevState,
      healthMarkerMonitors,
    }));
  };
  
  return (
    <div className={classes.root}>
      <GreenText size="subtitle" className={classes.title}>{i18n.t('Health Markers')}</GreenText>
      <Header
        healthMarkers={props.viewer ? props.viewer.healthMarkers : []}
        healthMarkerMonitors={healthMarkerMonitors}
        onClickAddGraph={handleClickAddGraph}
        onChangeHealthMarkerMonitor={handleChangeHealthMarkerMonitor}
      />
      {
        props.viewer && healthMarkerMonitors.map(healthMarkerMonitor => (
          <HealthMarkerMonitorGraph 
            healthMarker={props.viewer.healthMarkers.find(hm => hm._id === healthMarkerMonitor.healthMarkerId)}
            healthMarkerMonitor={healthMarkerMonitor}
            healthMarkerMonitorInterval={
              viewer 
              && viewer.healthMarkerMonitorIntervals.find(
                interval => 
                  interval.healthMarkerMonitorId === healthMarkerMonitor._id
                  && interval.userId === healthMarkerMonitor.userId
                  && interval.providerId === healthMarkerMonitor.providerId
              )
            }
          />
        ))
      }
    </div>
  );
};

export default createFragmentContainer(
  HealthMarkerListComponent,
  {
    viewer: graphql`
      fragment HealthMarkerListComponent_viewer on Query {
        viewer {
          _id: id
        }
        healthMarkers {
          _id: id
          reference
          marker
          unit
        }
        healthMarkerMonitors(healthMarkerMonitorsFilter: $healthMarkerMonitorsFilter) {
          _id: id
          userId
          providerId
          healthMarkerId
        }
        healthMarkerMonitorIntervals(healthMarkerMonitorIntervalsFilter: $healthMarkerMonitorIntervalsFilter) {
          _id: id
          userId
          providerId
          upperTarget
          lowerTarget
          healthMarkerMonitorId
        }
      }
    `,
  }
);