import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateExerciseMutation($id: Float!, $input: ExercisePartialInput!) {
    updateExercise(id: $id, exercisePartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateExerciseMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      intensiveExercise: parseFloat(input.intensiveExercise) || undefined,
      lightExercise: parseFloat(input.lightExercise) || undefined,
      moderateExercise: parseFloat(input.moderateExercise) || undefined,
      restingHeartRate: parseFloat(input.restingHeartRate) || undefined,
      source: input.source,
      standing: parseFloat(input.standing) || undefined,
      steps: parseFloat(input.steps) || undefined,
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