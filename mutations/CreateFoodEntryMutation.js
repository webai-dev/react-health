import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateFoodEntryMutation($input: NewFoodEntryInput!) {
    createFoodEntry(newFoodEntryInput: $input) {
      _id: id
    }
  }
`;


export default function CreateFoodEntryMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      time: moment(input.date).format(),
      entered: parseFloat(input.entered) || undefined,
      sum: parseFloat(input.entered) || undefined,
      type: input.type || undefined,
      foodId: parseFloat(input.foodId) || undefined,
      foodVariantId: parseFloat(input.foodVariantId) || undefined,
      userId: parseFloat(input.userId),
    }
    const variables = {
      input,
    };

    commitMutation(environment, {
      mutation,
      variables,
      updater: store => {
        const payload = store.getRootField('createFoodEntry');
        const id = payload.getValue('id');
        resolve(id);
      },
      // onCompleted: () => resolve(),
      onError: err => reject(err),
    });
  });
}
