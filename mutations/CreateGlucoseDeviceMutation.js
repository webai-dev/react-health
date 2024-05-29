import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateGlucoseDeviceMutation($input: NewGlucoseDeviceInput!) {
    createGlucoseDevice(newGlucoseDeviceInput: $input) {
      _id: id
    }
  }
`;

export default function CreateGlucoseDeviceMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      glucose: parseFloat(input.glucose) || undefined,
      userId: parseFloat(input.userId) || undefined,
    }
    const variables = {
      input,
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: err => reject(err),
    });
  });
}
