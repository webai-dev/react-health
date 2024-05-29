import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import { GeneralForm } from '../../../../../components';
import formConfig from '../../../../../config/forms/activity';
import CreateActivityMutation from '../../../../../mutations/CreateActivityMutation';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const CreateActivity = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  useEffect(() => {
    console.log(props.recipeWithRelations);
  }, []);

  return (
    <div className={classes.root}>
      <GeneralForm
        name="activity"
        nameField="title"
        router={props.router}
        config={formConfig}
        createMutation={CreateActivityMutation}
      />
    </div>
  );
};

export default CreateActivity;