import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import { GeneralForm } from '../../../../../components';
import formConfig from '../../../../../config/forms/recipe';

import DeleteRecipeMutation from '../../../../../mutations/DeleteRecipeMutation';
import UpdateRecipeMutation from '../../../../../mutations/UpdateRecipeMutation';

import { cloneObject } from '../../../../../utils';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const UpdateRecipe = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  return (
    <div className={classes.root}>
      <GeneralForm
        name="recipe"
        nameField="title"
        router={props.router}
        config={formConfig}
        objectId={props.viewer && props.viewer.recipe._id}
        formData={cloneObject(props.viewer && props.viewer.recipe)}
        deleteMutation={DeleteRecipeMutation}
        updateMutation={UpdateRecipeMutation}
        dependencies={{
          recipeCategories: props.viewer && props.viewer.recipeCategories.map(category => ({ label: category.title, value: category._id }))
        }}
      />
    </div>
  );
};

export default createFragmentContainer(
  UpdateRecipe,
  {
    viewer: graphql`
      fragment UpdateRecipe_viewer on Query {
        recipeCategories {
          _id: id
          title
        }

        recipe(id: $id) {
          _id: id
          title
          description
          ingredients
          taxonomyIngredients
          instructions
          kcalPerServing
          servings
          prepTime
          cookTime
          totalTime
          imgUrl
          imgDispName
          totalFatG
          saturatedFatG
          cholesterolMg
          sodiumMg
          carbTotalG
          carbFiberG
          sugarsG
          carbStarchG
          proteinG
          taxonomyMealType
          taxonomyDishType
          taxonomyCookingStyle
          taxonomyCuisine
          taxonomyDietHealth
          taxonomyGluten
          taxonomyNuts
          recipeCategoryId
        }
      }
    `,
  },
);