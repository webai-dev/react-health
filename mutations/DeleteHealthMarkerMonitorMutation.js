import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation DeleteHealthMarkerMonitorMutation($id: Float!) {
    deleteHealthMarkerMonitor(id: $id) {
      _id: id
    }
  }
`;

export default function DeleteHealthMarkerMonitorMutation(input: Object) {
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