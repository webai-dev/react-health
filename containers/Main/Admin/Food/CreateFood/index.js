import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import { GeneralForm } from '../../../../../components';
import formConfig from '../../../../../config/forms/food';
import CreateFoodMutation from '../../../../../mutations/CreateFoodMutation';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const CreateFood = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  useEffect(() => {
  }, []);

  return (
    <div className={classes.root}>
      <GeneralForm
        name="food"
        nameField="title"
        router={props.router}
        config={formConfig}
        createMutation={CreateFoodMutation}
      />
    </div>
  );
};

export default CreateFood;