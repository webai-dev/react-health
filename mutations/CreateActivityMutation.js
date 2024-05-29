import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateActivityMutation($input: NewActivityInput!) {
    createActivity(newActivityInput: $input) {
      _id: id
    }
  }
`;

export default function CreateActivityMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      label: input.label,
      met: parseFloat(input.met) || undefined,
      metMinute: parseFloat(input.metMinute) || undefined,
      type: input.type
    }
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