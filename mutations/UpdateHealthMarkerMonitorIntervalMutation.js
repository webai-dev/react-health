import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateHealthMarkerMonitorIntervalMutation($id: Float!, $input: HealthMarkerMonitorIntervalPartialInput!) {
    updateHealthMarkerMonitorInterval(id: $id, healthMarkerMonitorIntervalPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateHealthMarkerMonitorIntervalMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      upperTarget: input.upperTarget,
      lowerTarget: input.lowerTarget,
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