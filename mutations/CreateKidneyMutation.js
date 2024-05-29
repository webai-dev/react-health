import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateKidneyMutation($input: NewKidneyInput!) {
    createKidney(newKidneyInput: $input) {
      _id: id
    }
  }
`;

export default function CreateKidneyMutation(input: Object) {
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