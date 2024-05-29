import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import { GeneralForm } from '../../../../../components';
import formConfig from '../../../../../config/forms/activity';

import DeleteActivityMutation from '../../../../../mutations/DeleteActivityMutation';
import UpdateActivityMutation from '../../../../../mutations/UpdateActivityMutation';

import { cloneObject } from '../../../../../utils';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const UpdateActivity = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  return (
    <div className={classes.root}>
      <GeneralForm
        name="activity"
        nameField="title"
        router={props.router}
        config={formConfig}
        objectId={props.viewer && props.viewer.activity._id}
        formData={cloneObject(props.viewer && props.viewer.activity)}
        deleteMutation={DeleteActivityMutation}
        updateMutation={UpdateActivityMutation}
      />
    </div>
  );
};

export default createFragmentContainer(
  UpdateActivity,
  {
    viewer: graphql`
      fragment UpdateActivity_viewer on Query {
        activity(id: $id) {
          _id: id
          met
          label
          type
          metMinute
        }
      }
    `,
  },
);