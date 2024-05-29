import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateAnthropometryMutation($id: Float!, $input: AnthropometryPartialInput!) {
    updateAnthropometry(id: $id, anthropometryPartialInput: $input) {
      id
    }
  }
`;

export default function UpdateAnthropometryMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      bmi: parseFloat(input.bmi) || undefined,
      date: moment(input.date).format(),
      height: parseFloat(input.height) || undefined,
      waist: parseFloat(input.waist) || undefined,
      weight: parseFloat(input.weight) || undefined,
      arms: parseFloat(input.arms) || undefined,
      chest: parseFloat(input.chest) || undefined,
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