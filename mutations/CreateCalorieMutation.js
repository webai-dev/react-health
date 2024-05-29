import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateCalorieMutation($input: NewCalorieInput!) {
    createCalorie(newCalorieInput: $input) {
      _id: id
    }
  }
`;

export default function CreateCalorieMutation(input: Object) {
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
      input,
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: err => reject(err),
    });
  });
}
