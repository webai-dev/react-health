import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateFoodVariantMutation($input: NewFoodVariantInput!) {
    createFoodVariant(newFoodVariantInput: $input) {
      _id: id
    }
  }
`;


export default function CreateFoodVariantMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      amount: parseFloat(input.amount) || undefined,
      foodId: parseFloat(input.foodId) || undefined,
      label: input.label,
      serving: input.serving,
      unit: input.unit,
      variant: input.variant,
    }
    const variables = {
      input,
    };

    commitMutation(environment, {
      mutation,
      variables,
      updater: store => {
        const payload = store.getRootField('createFoodVariant');
        const id = payload.getValue('_id');
        resolve(id);
      },
      // onCompleted: () => resolve(),
      onError: err => reject(err),
    });
  });
}
