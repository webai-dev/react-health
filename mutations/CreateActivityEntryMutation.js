import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateActivityEntryMutation($input: NewActivityEntryInput!) {
    createActivityEntry(newActivityEntryInput: $input) {
      _id: id
    }
  }
`;

export default function CreateActivityEntryMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      activityId: parseInt(input.activityId) || undefined,
      energy: parseFloat(input.energy) || undefined,
      amountMinutes: parseFloat(input.amountMinutes) || undefined,
      date: moment(input.date).format(),
      time: moment(input.date).format(),
      userId: parseFloat(input.userId) || undefined,
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