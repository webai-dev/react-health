import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateBloodPressureMutation($id: Float!, $input: BloodPressurePartialInput!) {
    updateBloodPressure(id: $id, bloodPressurePartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateBloodPressureMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      systolic: parseFloat(input.systolic) || undefined,
      diastolic: parseFloat(input.diastolic) || undefined,
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