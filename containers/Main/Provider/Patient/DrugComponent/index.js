import React, { useState, useEffect } from 'react';
import moment from 'moment';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

import { GreenText, GrayText, PrimaryText } from '../../../../../components';
import i18n from '../../../../../i18n';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem',
  },
  card: {
    borderRadius: 17,
    padding: '1.5rem 2rem',
    marginTop: '2rem',
  },
  drugManufacturer: {
    marginRight: '3rem',
    width: 350,
  },
  drugTitle: {
    marginRight: '3rem',
    width: 350,
  },
  title: {
    marginBottom: '1rem',
  }
}));

const DrugComponent = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({});

  return (
    <div className={classes.root}>
      <GreenText size="subtitle" className={classes.title}>{i18n.t('Drug')}</GreenText>
      <Card className={classes.card}>
        {
          props.viewer && props.viewer.drugEntries.map(drugEntry => (
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <PrimaryText className={classes.drugTitle}>{drugEntry.drug.labelTitle}</PrimaryText>
                <PrimaryText className={classes.drugManufacturer}>{drugEntry.drug.manufacturer}</PrimaryText>
                <PrimaryText className={classes.drugDose}>{drugEntry.drug.dose}</PrimaryText>
              </Box>
              <PrimaryText>{i18n.t('Inserted')} {moment(drugEntry.dateStarted).format('YYYY-MM-DD')}</PrimaryText>
            </Box>
          ))
        }
      </Card>
    </div>
  );
};

export default createFragmentContainer(
  DrugComponent,
  {
    viewer: graphql`
      fragment DrugComponent_viewer on Query {
        drugEntries(drugEntriesFilter: $drugEntriesFilter) {
          drug {
            dose
            labelTitle
            manufacturer
          }
          dateStarted
        }
      }
    `,
  }
);