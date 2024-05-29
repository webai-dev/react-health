import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateSharingMutation($id: Float!, $input: SharingPartialInput!) {
    updateSharing(id: $id, sharingPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateSharingMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      name: input.name,
      email: input.email,
      phone: input.phone,
      terminated: input.terminated,
      userId: input.userId,
      providerId: input.providerId,
      twilioChatChannelId: input.twilioChatChannelId,
      comment: input.comment,
      diabetesControl: input.diabetesControl,
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