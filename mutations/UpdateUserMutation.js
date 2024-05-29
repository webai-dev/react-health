import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateUserMutation($id: Float!, $input: UserPartialInput!) {
    updateUser(id: $id, userPartialInput: $input) {
      id
    }
  }
`;

export default function UpdateUserMutation(id: Number, input: Object) {
  // flow-disable

  return new Promise((resolve, reject) => {
    $: input = {
      dateRegistered: moment(input.dateRegistered).format(),
      cellPhone: input.cellPhone,
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
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