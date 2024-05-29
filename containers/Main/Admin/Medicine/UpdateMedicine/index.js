import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import { GeneralForm } from '../../../../../components';
import formConfig from '../../../../../config/forms/medicine';

import DeleteMedicineMutation from '../../../../../mutations/DeleteMedicineMutation';
import UpdateMedicineMutation from '../../../../../mutations/UpdateMedicineMutation';

import { cloneObject } from '../../../../../utils';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const UpdateMedicine = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  return (
    <div className={classes.root}>
      <GeneralForm
        name="medicine"
        nameField="title"
        router={props.router}
        config={formConfig}
        objectId={props.viewer && props.viewer.drug._id}
        formData={cloneObject(props.viewer && props.viewer.drug)}
        deleteMutation={DeleteMedicineMutation}
        updateMutation={UpdateMedicineMutation}
      />
    </div>
  );
};

export default createFragmentContainer(
  UpdateMedicine,
  {
    viewer: graphql`
      fragment UpdateMedicine_viewer on Query {
        drug(id: $id) {
          _id: id
          atc
          labelTitle
          labelSubTitle
          manufacturer
          dose
          delivery
          activeSubstance
          icon
        }
      }
    `,
  },
);