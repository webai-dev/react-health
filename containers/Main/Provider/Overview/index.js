import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, QueryRenderer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { PrimaryButton, WhiteText } from '../../../../components';

import OverviewSharingItem from './OverviewSharingItem';

import i18n from '../../../../i18n';
import { Images } from '../../../../styles';
import environment from '../../../../relay-environment';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  card: {
    padding: '2rem 2.5rem',
  },
  icon: {
    backgroundColor: '#ff6961',
    padding: '5px 5px 0 5px',
    borderRadius: '8px',
    marginRight: '1rem',
  },
  logoutButton: {
    marginTop: '2rem',
  },
  name: {
    color: '#4A7C8E',
    fontSize: 24,
  },
  title: {
    fontSize: 28,
  }
}));

const SharersQuery = graphql`
  query OverviewSharersQuery($filter: SharingsFilterInput) {
    sharings(sharingsFilter: $filter) {
      _id: id
      user {
        _id: id
        firstName
        lastName
      }
      dateStarted
      terminated
      comment
      diabetesControl
    }
  }
`

const columns = [
  {
    name: 'person',
    label: i18n.t('Person'),
  },
  {
    name: 'diabetes',
    label: i18n.t('Type of diabetes'),
  },
  {
    name: 'dateStarted',
    label: i18n.t('Started sharing'),
  },
  {
    name: 'completed',
    label: i18n.t('Completed sharing'),
  },
  {
    name: 'comment',
    label: i18n.t('Self comment'),
  },
  {
    name: 'diabetesControl',
    label: i18n.t('General diabetes control'),
  },
]

const Overview = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  if (!props.viewer) {
    return null;
  }

  const { viewer } = props.viewer;

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" marginBottom="2rem">
        <div className={classes.icon}>
          <img src={Images.ICON_USER}/>
        </div>
        <div className={classes.title}><strong>{i18n.t('Overview')}</strong></div>
      </Box>
      <QueryRenderer
        environment={environment}
        query={SharersQuery}
        variables={{
          filter: {
            where: {
              providerId: viewer._id
            },
            include: [{relation: 'user'}],
          },
        }}
        render={({error, props: relayProps}) => {
          if (!error && !relayProps) {
            return null;
          }

          if (relayProps) {
            const { sharings } = relayProps;

            return (  
              <Card className={classes.card}>
                <div className={classes.name}>{i18n.t('Active shares')}</div>
                <TableContainer>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        {(columns || []).map((column) => (
                          <TableCell
                            key={column.id}
                            style={{ minWidth: column.minWidth }}
                          >
                            <strong>{column.label}</strong>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        (sharings || []).filter(sharing => sharing.dateStarted).map((row, index) => (
                          <OverviewSharingItem
                            index={index}
                            sharing={row}
                          />
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            );
          }
        }}
      />
    </div>
  );
};

export default createFragmentContainer(
  Overview,
  {
    viewer: graphql`
      fragment Overview_viewer on Query {
        viewer(viewerFilter: $filter) {
          _id: id
        }
      }
    `
  }
);