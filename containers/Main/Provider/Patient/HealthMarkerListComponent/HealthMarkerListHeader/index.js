import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import { Dropdown, GrayText, WhiteText } from '../../../../../../components';
import { Colors } from '../../../../../../styles';
import i18n from '../../../../../../i18n';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  addButton: {
    marginLeft: '2rem',
  },
  addButtonSignal: {
    backgroundColor: Colors.COLOR_GREEN_BUTTON,
    width: 40,
    height: 40,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
    paddingLeft: 2,
    fontSize: 40,
    fontWeight: 100,
    marginRight: '1rem',
  },
  card: {
    padding: '0 1rem',
    marginRight: '1rem',
  }
}));

const HealthMarkerListHeader = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({});

  const handleChangeHealthMarkerMonitor = (healthMarkerMonitorIndex, healthMarkerMonitorId, healthMarkerId) => {
    props.onChangeHealthMarkerMonitor(healthMarkerMonitorIndex, healthMarkerMonitorId, healthMarkerId);
  };

  const handleClickAddGraph = () => {
    props.onClickAddGraph();
  };

  return (
    <div className={classes.root}>
      {
        (props.healthMarkerMonitors || []).map((healthMarkerMonitor, healthMarkerMonitorIndex) => (
          <Card className={classes.card}>
            <Dropdown
              key={healthMarkerMonitorIndex}
              value={healthMarkerMonitor.healthMarkerId}
              items={props.healthMarkers.map((healthMarker) => ({ label: `${healthMarker.marker} (${healthMarker.unit})`, value: healthMarker._id }))}
              onChange={(healthMarkerId) => handleChangeHealthMarkerMonitor(healthMarkerMonitorIndex, healthMarkerMonitor._id, healthMarkerId)}
            />
          </Card>
        ))
      }
      <Button 
        className={classes.addButton}
        onClick={handleClickAddGraph}
      >
        <WhiteText className={classes.addButtonSignal}>+</WhiteText>
        <GrayText>{i18n.t('Add graph')}</GrayText>
      </Button>
    </div>
  );
};

export default HealthMarkerListHeader;