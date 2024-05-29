import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import { GeneralForm, GeneralTable } from '../../../../../components';
import formConfig from '../../../../../config/forms/food';
import tableFormConfig from '../../../../../config/forms/foodVariant';
import tableConfig from '../../../../../config/tables/foodVariant';

import DeleteFoodMutation from '../../../../../mutations/DeleteFoodMutation';
import UpdateFoodMutation from '../../../../../mutations/UpdateFoodMutation';
import DeleteFoodVariantMutation from '../../../../../mutations/DeleteFoodVariantMutation';
import UpdateFoodVariantMutation from '../../../../../mutations/UpdateFoodVariantMutation';

import { cloneObject } from '../../../../../utils';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const UpdateFood = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  return (
    <div className={classes.root}>
      <GeneralForm
        name="food"
        nameField="title"
        router={props.router}
        config={formConfig}
        objectId={props.viewer && props.viewer.food._id}
        formData={cloneObject(props.viewer && props.viewer.food)}
        deleteMutation={DeleteFoodMutation}
        updateMutation={UpdateFoodMutation}
      />
      <GeneralTable
        title="Food Variants"
        columns={tableConfig}
        data={props.viewer ? props.viewer.food.foodVariants : []}
        formName="Food Variant"
        formNameField="Label"
        formConfig={tableFormConfig}
        deleteMutation={DeleteFoodVariantMutation}
        updateMutation={UpdateFoodVariantMutation}
      />
    </div>
  );
};

export default createFragmentContainer(
  UpdateFood,
  {
    viewer: graphql`
      fragment UpdateFood_viewer on Query {
        food(id: $id, foodFilter: $filter) {
          _id: id
          label
          unit
          kcal
          carbs
          fat
          protein
          fibre
          water
          ash
          sugars
          sumSaturated
          sumMonounsaturated
          sumPolyunsaturated
          cholesterol
          retinol
          vitaminA
          bKaroten
          vitaminD
          vitaminE
          vitaminK
          tiamin
          riboflavin
          vitaminC
          niacin
          vitaminB6
          vitaminB12
          folicAcid
          phosphorus
          iron
          calcium
          potassium
          copper
          magnesium
          sodium
          selenium
          zink
          source
          comment
          active

          foodVariants {
            _id: id
            amount
            label
            serving
            unit
            variant
          }
        }
      }
    `,
  },
);