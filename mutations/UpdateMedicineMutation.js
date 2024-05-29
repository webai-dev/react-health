import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateMedicineMutation($id: Float!, $input: DrugPartialInput!) {
    updateDrug(id: $id, drugPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateMedicineMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    const variables = {
      id,
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