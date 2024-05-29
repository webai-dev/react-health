import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import { GeneralForm } from '../../../../../components';
import formConfig from '../../../../../config/forms/medicine';
import CreateMedicineMutation from '../../../../../mutations/CreateMedicineMutation';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const CreateMedicine = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  useEffect(() => {
  }, []);

  return (
    <div className={classes.root}>
      <GeneralForm
        name="medicine"
        nameField="title"
        router={props.router}
        config={formConfig}
        createMutation={CreateMedicineMutation}
      />
    </div>
  );
};

export default CreateMedicine;