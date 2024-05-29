import React, { useState, useEffect } from 'react';
import { createFragmentContainer, QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

import { UserForm } from '../../../../../../components';

import DeleteRecipeMutation from '../../../../../../mutations/DeleteRecipeMutation';
import UpdateRecipeMutation from '../../../../../../mutations/UpdateRecipeMutation';

import { cloneObject } from '../../../../../../utils';
import environment from '../../../../../../relay-environment';

import { userTableList, queryList, formConfigList } from '../../../../../../constants';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const UpdateUserForm = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();
  const { selectedTable, objectId, formData, createMutation, updateMutation, deleteMutation} = props;
  const formConfig = formConfigList[selectedTable.form];

  return (
    <div className={classes.root}>
      <UserForm
        name={selectedTable.name}
        title={selectedTable.text}
        router={props.router}
        config={formConfig}
        objectId={objectId}
        formData={cloneObject(formData)}
        createMutation={createMutation}
        deleteMutation={deleteMutation}
        updateMutation={updateMutation}
        // dependencies={{
        //   recipeCategories: props.viewer && props.viewer.recipeCategories.map(category => ({ label: category.title, value: category._id }))
        // }}
      />
    </div>
  );
};

export default UpdateUserForm;