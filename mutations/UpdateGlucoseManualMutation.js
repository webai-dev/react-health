import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateGlucoseManualMutation($id: Float!, $input: GlucoseManualPartialInput!) {
    updateGlucoseManual(id: $id, glucoseManualPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateGlucoseManualMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      glucoseABreakfast: parseFloat(input.glucoseABreakfast) || undefined,
      glucoseADinner: parseFloat(input.glucoseADinner) || undefined,
      glucoseALunch: parseFloat(input.glucoseALunch) || undefined,
      glucoseBBreakfast: parseFloat(input.glucoseBBreakfast) || undefined,
      glucoseBDinner: parseFloat(input.glucoseBDinner) || undefined,
      glucoseBLunch: parseFloat(input.glucoseBLunch) || undefined,
      glucoseFasting: parseFloat(input.glucoseFasting) || undefined,
      glucoseRandom: parseFloat(input.glucoseRandom) || undefined,
      hba1c: parseFloat(input.hba1c) || undefined,
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