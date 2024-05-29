import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateCalorieMutation($id: Float!, $input: CaloriesPartialInput!) {
    updateCalorie(id: $id, caloriesPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateCalorieMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      burned: parseFloat(input.burned) || undefined,
      consumed: parseFloat(input.consumed) || undefined,
      carbohydrates: parseFloat(input.carbohydrates) || undefined,
      protein: parseFloat(input.protein) || undefined,
      fat: parseFloat(input.fat) || undefined,
      waterConsumption: parseFloat(input.waterConsumption) || undefined,
      date: moment(input.date).format(),
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