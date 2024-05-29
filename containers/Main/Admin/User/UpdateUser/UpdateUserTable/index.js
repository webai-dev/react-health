import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, QueryRenderer } from 'react-relay';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

import { GeneralTable } from '../../../../../../components';

import environment from '../../../../../../relay-environment';
import { ActivityEntryTableQuery } from '../../../../../../queries';

import { queryList } from '../../../../../../constants'


const useStyles = makeStyles(theme => ({
  root: {},
}));

const UpdateUserTable = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    page: 0,
    rowsPerPage: 5,
    count: 0,
  });
  const { page, rowsPerPage } = state;
  const { columns, createMutation, updateMutation, deleteMutation, formConfig, selectedTable, userId } = props;

  const handleChangePage = (page) => {
    setState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const handleChangeRowsPerPage = (rowsPerPage) => {
    setState((prevState) => ({
      ...prevState,
      rowsPerPage,
      page: 0,
    }));
  };

  const updateCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  }

  const handleCreate = () => {
    updateCount();
  };

  const handleUpdate = () => {

  };

  const handleDelete = () => {
    updateCount();
  };

  return (
    <div className={classes.root}>
      <QueryRenderer
        environment={environment}
        query={queryList[selectedTable.name + 'Table']}
        variables={{
          filter: {
            limit: rowsPerPage,
            offset: rowsPerPage * page,
            where: {
              userId
            }
          },
          anthropometriesFilter: {
            where: {
              userId
            }
          },
          totalCountCondition: {
            userId,
          },
          count: state.count,
        }}
        render={({error, props: relayProps}) => {
          if (relayProps) {
            const { items, totalCount } = relayProps;
            const formDependencies = {};
            (formConfig.dependencies || []).forEach(
              dependency => {
                if (dependency.entries) {
                  formDependencies[dependency.name] = dependency.entries;
                } else {
                  formDependencies[dependency.name] = relayProps[dependency.name].map(item => ({ ...item, label: item[dependency.labelField || 'label'], value: item[dependency.idField || '_id'] }));
                }
              }
            );

            return (
              <GeneralTable
                title=""
                columns={columns}
                data={items}
                totalCount={totalCount.count}
                formName={selectedTable.name}
                formData={{ userId: props.userId }}
                formConfig={formConfig}
                formDependencies={formDependencies}
                page={page}
                rowsPerPage={rowsPerPage}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                createMutation={createMutation}
                updateMutation={updateMutation}
                deleteMutation={deleteMutation}
                onCreate={handleCreate}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default UpdateUserTable;