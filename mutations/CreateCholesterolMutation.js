import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateCholesterolMutation($input: NewCholesterolInput!) {
    createCholesterol(newCholesterolInput: $input) {
      _id: id
    }
  }
`;


export default function CreateCholesterolMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      hdlChol: parseFloat(input.hdlChol) || undefined,
      ldlChol: parseFloat(input.ldlChol) || undefined,
      totalChol: parseFloat(input.totalChol) || undefined,
      triglycerides: parseFloat(input.triglycerides) || undefined,
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
