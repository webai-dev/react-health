import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateRecipeMutation($input: NewRecipeInput!) {
    createRecipe(newRecipeInput: $input) {
      _id: id
    }
  }
`;

export default function CreateRecipeMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    const variables = {
      input,
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: (err) => reject(err),
    });
  });
}