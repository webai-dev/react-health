import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateNoteMutation($input: NewNoteInput!) {
    createNote(newNoteInput: $input) {
        title
    }
  }
`;


export default function CreateNoteMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      text: input.text,
      title: input.title,
      createdAt: moment(input.createdAt).format(),
      userId: parseFloat(input.userId),
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