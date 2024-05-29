import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateKidneyMutation($id: Float!, $input: KidneyPartialInput!) {
    updateKidney(id: $id, kidneyPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateKidneyMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      ualbkrea: parseFloat(input.ualbkrea) || undefined,
      creatinine: parseFloat(input.creatinine) || undefined,
      egfr: parseFloat(input.egfr) || undefined,
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