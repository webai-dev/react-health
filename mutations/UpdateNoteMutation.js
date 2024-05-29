import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateNoteMutation($id: Float!, $input: NotePartialInput!) {
    updateNote(id: $id, notePartialInput: $input) {
      id
    }
  }
`;

export default function UpdateNoteMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      text: input.text,
      title: input.title,
      createdAt: moment(input.createdAt).format(),
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