import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateMedicineMutation($input: NewDrugInput!) {
    createDrug(newDrugInput: $input) {
      _id: id
    }
  }
`;

export default function CreateMedicineMutation(input: Object) {
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