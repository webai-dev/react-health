import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateFoodVariantMutation($id: Float!, $input: FoodVariantPartialInput!) {
    updateFoodVariant(id: $id, foodVariantPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateFoodVariantMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      amount: parseFloat(input.amount) || undefined,
      label: input.label,
      serving: input.serving,
      unit: input.unit,
      variant: input.variant,
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