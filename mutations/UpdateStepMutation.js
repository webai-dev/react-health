import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateStepMutation($id: Float!, $input: StepPartialInput!) {
    updateStep(id: $id, stepPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateStepMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      steps: parseFloat(input.steps) || undefined,
      training: parseFloat(input.training) || undefined,
      restingHeartRate: parseFloat(input.restingHeartRate) || undefined,
      stressSmartWatch: parseFloat(input.stressSmartWatch) || undefined,
      sleepSmartWatch: parseFloat(input.sleepSmartWatch) || undefined,
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