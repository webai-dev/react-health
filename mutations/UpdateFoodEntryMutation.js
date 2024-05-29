import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateFoodEntryMutation($id: Float!, $input: FoodEntryPartialInput!) {
    updateFoodEntry(id: $id, foodEntryPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateFoodEntryMutation(id: Number, input: Object) {
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
      userId: parseFloat(input.userId) || undefined,
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