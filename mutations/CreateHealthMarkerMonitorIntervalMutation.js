import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateHealthMarkerMonitorIntervalMutation($input: NewHealthMarkerMonitorIntervalInput!) {
    createHealthMarkerMonitorInterval(newHealthMarkerMonitorIntervalInput: $input) {
      _id: id
    }
  }
`;

export default function CreateHealthMarkerMonitorIntervalMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    const variables = {
      input,
    };
    commitMutation(environment, {
      mutation,
      variables,
      updater: store => {
        const payload = store.getRootField('createHealthMarkerMonitorInterval');
        const id = payload.getValue('_id');
        resolve(id);
      },
      // onCompleted: () => resolve(),
      onError: (err) => reject(err),
    });
  });
}