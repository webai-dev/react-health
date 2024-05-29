import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation DeleteMedicineMutation($id: Float!) {
    deleteDrug(id: $id) {
      _id: id
    }
  }
`;

export default function DeleteMedicineMutation(input: Object) {
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