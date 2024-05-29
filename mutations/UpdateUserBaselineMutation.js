import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateUserBaselineMutation($id: Float!, $input: UserBaselinePartialInput!) {
    updateUserBaseline(id: $id, userBaselinePartialInput: $input) {
      id
    }
  }
`;

export default function UpdateUserBaselineMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      aimGlucoseControl: input.aimGlucoseControl ? true : false,
      aimGoalWeight: parseFloat(input.aimGoalWeight) || undefined,
      aimRiskControl: input.aimRiskControl ? true : false,
      aimWeeksWeight: parseFloat(input.aimWeeksWeight) || undefined,
      aimWeightLoss: input.aimWeightLoss ? true : false,
      height: parseFloat(input.height) || undefined,
      sex: input.sex,
      useCgm: input.useCgm ? true : false,
      useCgmType: input.useCgmType,
      usePump: input.usePump ? true : false,
      usePumpType: input.usePumpType,
      useSmartWatch: input.useSmartWatch ? true : false,
      useSmartWatchType: input.useSmartWatchType,
      useStrips: input.useStrips ? true : false
    };

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