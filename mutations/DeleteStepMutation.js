import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation DeleteStepMutation($id: Float!) {
    deleteStep(id: $id) {
      _id: id
    }
  }
`;

export default function DeleteStepMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables: input,
      onCompleted: () => resolve(),
      onError: (err) => reject(err),
    });
  });
}