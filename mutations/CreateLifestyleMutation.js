import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateLifestyleMutation($input: NewLifestyleInput!) {
    createLifestyle(newLifestyleInput: $input) {
      _id: id
    }
  }
`;

export default function CreateLifestyleMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      exerciseLevel: parseFloat(input.exerciseLevel) || undefined,
      dietType: parseFloat(input.dietType) || undefined,
      smoking: input.smoking,
      userId: parseFloat(input.userId) || undefined,
    }
    const variables = {
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