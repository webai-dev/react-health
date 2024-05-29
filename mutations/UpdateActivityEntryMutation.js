import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateActivityEntryMutation($id: Float!, $input: ActivityEntryPartialInput!) {
    updateActivityEntry(id: $id, activityEntryPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateActivityEntryMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      label: input.label,
      energy: parseFloat(input.energy) || undefined,
      met: parseFloat(input.met) || undefined,
      metMinute: parseFloat(input.metMinute) || undefined,
      type: input.type
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