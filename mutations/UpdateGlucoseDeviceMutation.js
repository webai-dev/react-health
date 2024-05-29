import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateGlucoseDeviceMutation($id: Float!, $input: GlucoseDevicesPartialInput!) {
    updateGlucoseDevice(id: $id, glucoseDevicesPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateGlucoseDeviceMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      glucose: parseFloat(input.glucose) || undefined,
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