import React, { useState, useEffect } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';

import { GeneralForm } from '../../../../../components';
import formConfig from '../../../../../config/forms/recipe';
import CreateRecipeMutation from '../../../../../mutations/CreateRecipeMutation';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const CreateRecipe = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  useEffect(() => {
    console.log(props.recipeWithRelations);
  }, []);

  return (
    <div className={classes.root}>
      <GeneralForm
        name="recipe"
        nameField="title"
        router={props.router}
        config={formConfig}
        createMutation={CreateRecipeMutation}
        dependencies={{
          recipeCategories: props.viewer && props.viewer.recipeCategories.map(category => ({ label: category.title, value: category._id }))
        }}
      />
    </div>
  );
};

export default createFragmentContainer(
  CreateRecipe,
  {
    viewer: graphql`
      fragment CreateRecipe_viewer on Query {
        recipeCategories {
          _id: id
          title
        }
      }
    `,
  },
);