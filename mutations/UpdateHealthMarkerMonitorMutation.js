import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateHealthMarkerMonitorMutation($id: Float!, $input: HealthMarkerMonitorPartialInput!) {
    updateHealthMarkerMonitor(id: $id, healthMarkerMonitorPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateHealthMarkerMonitorMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      userId: input.userId,
      healthMarkerId: input.healthMarkerId,
      providerId: input.providerId,
    }
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