import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateDiabetesMutation($id: Float!, $input: DiabetesPartialInput!) {
    updateDiabetes(id: $id, diabetesPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateCholesterolMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      diabetesStatus: parseFloat(input.diabetesStatus) || undefined,
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