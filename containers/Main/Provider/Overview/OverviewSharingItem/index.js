import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, QueryRenderer } from 'react-relay';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { TableInput, Dropdown } from '../../../../../components';
import { DropdownItems } from '../../../../../constants';
import UpdateSharingMutation from '../../../../../mutations/UpdateSharingMutation';

import i18n from '../../../../../i18n';

import environment from '../../../../../relay-environment';

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    cursor: 'pointer',
    marginLeft: '1rem',
  },
  completed: {
    color: '#f00'
  },
  ongoing: {
    color: '#0f0'
  },
}));

const OverviewSharingItemDiabetesTypeQuery = graphql`
  query OverviewSharingItemDiabetesTypeQuery($diabetesFilter: DiabetesFilterInput) {
    diabetes(diabetesFilter: $diabetesFilter) {
      diabetesStatus
    }
  }
`;

const OverviewSharingItem = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({
    commentMode: 'view',
    diabetesControlMode: 'view',
    comment: '',
    diabetesControl: '',
  });
  const { sharing } = props;
  const { commentMode, diabetesControlMode, comment, diabetesControl } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      comment: sharing.comment,
      diabetesControl: sharing.diabetesControl,
    }));
  }, [])

  const handleClickComment = () => {
    setState((prevState) => ({
      ...prevState,
      commentMode: 'edit',
    }));
  };

  const handleClickDiabetesControl = () => {
    setState((prevState) => ({
      ...prevState,
      diabetesControlMode: 'edit',
    }));
  }

  const handleChangeComment = (e) => {
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      comment: value,
    }));
  };

  const handleChangeDiabetesControl = (e) => {
    const value = e.target.value;
    
    setState((prevState) => ({
      ...prevState,
      diabetesControl: value,
    }));
  };

  const handleClickCancelCommentEdit = () => {
    setState((prevState) => ({
      ...prevState,
      commentMode: 'view',
      comment: sharing.comment,
    }));
  };

  const handleClickCancelDiabetesControlEdit = () => {
    setState((prevState) => ({
      ...prevState,
      diabetesControlMode: 'view',
      diabetesControl: sharing.diabetesControl,
    }));
  };

  const handleClickSaveComment = () => {
    UpdateSharingMutation(sharing._id, {
      comment: state.comment,
    });

    setState((prevState) => ({
      ...prevState,
      commentMode: 'view',
    }));
  };

  const handleClickSaveDiabetesControl = () => {
    if (state.diabetesControl) {
      UpdateSharingMutation(sharing._id, {
        diabetesControl: parseInt(state.diabetesControl),
      });
    }
    
    setState((prevState) => ({
      ...prevState,
      diabetesControlMode: 'view',
    }));
  };

  return (
    <TableRow>
      <TableCell>
        {props.index + 1}. { sharing.user.firstName } { sharing.user.lastName }
      </TableCell>
      <TableCell>
        <QueryRenderer
          environment={environment}
          query={OverviewSharingItemDiabetesTypeQuery}
          variables={{
            diabetesFilter: {
              where: {
                userId: sharing.user._id,
              },
              order: [
                'date DESC'
              ],
              limit: 1
            },
          }}
          render={({error, props: relayProps}) => {
            if (!error && !relayProps) {
              return null;
            }

            if (relayProps) {
              const { diabetes } = relayProps;
              const diabetesItem = diabetes.length > 0 && DropdownItems.DiabetesDropdown.find(item => item.value === diabetes[0].diabetesStatus);

              return (  
                <div>{diabetesItem && diabetesItem.label}</div>
              );
            }
          }}
        />
      </TableCell>
      <TableCell>
        {moment(sharing.dateStarted).format('YYYY-MM-DD')}
      </TableCell>
      <TableCell>
        {
          sharing.terminated ? (
            <div className={classes.completed}>{i18n.t('Completed')}</div>
          ) : (
            <div className={classes.ongoing}>{i18n.t('Ongoing')}</div>
          )
        }
      </TableCell>
      <TableCell>
        {
          commentMode === 'view' ? (
            <div onClick={handleClickComment}>
              {
                state.comment ? state.comment : `${i18n.t('write here')}...`
              }
            </div>
          ) : (
            <Box display="flex" alignItems="center">
              <TableInput
                value={state.comment}
                onChange={handleChangeComment}
                placeholder={`${i18n.t('write here')}...`}
              />
              <div className={classes.button} onClick={handleClickSaveComment}>Save</div>
              <div className={classes.button} onClick={handleClickCancelCommentEdit}>Cancel</div>
            </Box>
          )
        }
      </TableCell>
      <TableCell>
      {
          diabetesControlMode === 'view' ? (
            <div onClick={handleClickDiabetesControl}>
              {
                state.diabetesControl ? state.diabetesControl : `${i18n.t('Enter')} 1 ${i18n.t('to')} 10...`
              }
            </div>
          ) : (
            <Box display="flex" alignItems="center">
              <TableInput
                value={state.diabetesControl}
                onChange={handleChangeDiabetesControl}
                placeholder={`${i18n.t('Enter')} 1 ${i18n.t('to')} 10...`}
                type="number"
                min={1}
                max={10}
              />
              <div className={classes.button} onClick={handleClickSaveDiabetesControl}>Save</div>
              <div className={classes.button} onClick={handleClickCancelDiabetesControlEdit}>Cancel</div>
            </Box>
          )
        }
      </TableCell>
    </TableRow>
  );
};

export default OverviewSharingItem;