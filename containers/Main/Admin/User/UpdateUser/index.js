import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

import { OutlineButton, LightText, PrimaryText, SecondaryText, SkeletonContainer, Link } from '../../../../../components';

import i18n from '../../../../../i18n';
import { Images } from '../../../../../styles';

import { userTableList, queryList, mutationList, formConfigList, tableConfigList } from '../../../../../constants';

import UpdateUserForm from './UpdateUserForm';
import UpdateUserTable from './UpdateUserTable';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    padding: '1.5rem 2rem',
    marginTop: '1rem',
  },
  menuListItem: {
    display: 'inline-block',
    height: 44,
    borderRadius: 22,
  },
  outlineButton: {
    padding: 0,
    marginLeft: '1rem',
  },
  outlineButtonText: {
    marginLeft: '0.5rem',
  },
  tableList: {
    marginTop: '2rem',
  },
}));


const UpdateUser = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    selectedTable: null,
  });
  const { selectedTable } = state;

  const handleClickTable = (table) => {
    setState((prevState) => ({
      ...prevState,
      selectedTable: table,
    }));
  };

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <Box display="flex" justifyContent="space-between">
          <SkeletonContainer isLoading={!props.viewer} width={350} height={32}>
            <LightText size="subtitle">{props.viewer && `${props.viewer.user.firstName} ${props.viewer.user.lastName}`}</LightText>
          </SkeletonContainer>
        </Box>
        <Box marginTop="2rem">
          <SecondaryText size="subtitle">{i18n.t('Select table')}</SecondaryText>
          <List className={classes.tableList}>
            {
              userTableList.map((table, index) => (
                <MenuItem
                  button
                  classes={{
                    root: classes.menuListItem,
                    selected: classes.menuListItemSelected,
                  }}
                  selected={selectedTable && table.name === selectedTable.name}
                  onClick={() => handleClickTable(table)}
                >
                  <ListItemText className={classes.menuListItemText} primary={<PrimaryText>{table.text}</PrimaryText>}/>
                </MenuItem>
              ))
            }
          </List>
        </Box>
      </Card>
      {
        selectedTable && selectedTable.type === 'form' && (
          <UpdateUserForm
            selectedTable={selectedTable}
            formData={props.viewer && (selectedTable.name === 'user' ? props.viewer.user : props.viewer.user.userBaseline)}
            objectId={props.viewer && (selectedTable.name === 'user' ? props.viewer.user._id : props.viewer.user.userBaseline._id)}
            createMutation={mutationList.create[selectedTable.form]}
            updateMutation={mutationList.update[selectedTable.form]}
            router={props.router}
          />
        )
      }
      {
        selectedTable && selectedTable.type === 'table' && (
          <UpdateUserTable
            selectedTable={selectedTable}
            columns={tableConfigList[selectedTable.name]}
            createMutation={mutationList.create[selectedTable.name + 'Table']}
            updateMutation={mutationList.update[selectedTable.name + 'Table']}
            deleteMutation={mutationList.delete[selectedTable.name + 'Table']}
            formConfig={formConfigList[selectedTable.name]}
            userId={props.viewer.user._id}
          />
        )
      }


    </React.Fragment>
  );
};


export default createFragmentContainer(
  UpdateUser,
  {
    viewer: graphql`
      fragment UpdateUser_viewer on Query {
        user(id: $id, userFilter: $filter) {
          _id: id
          firstName
          lastName
          email
          birthDate
          cellPhone

          userBaseline {
            _id: id
            sex
            age
            height
            aimWeightLoss
            aimGlucoseControl
            aimRiskControl
            aimGoalWeight
            aimWeeksWeight
            usePump
            usePumpType
            useCgm
            useCgmType
            useStrips
            useSmartWatch
            useSmartWatchType
          }
        }
      }
    `,
  },
);