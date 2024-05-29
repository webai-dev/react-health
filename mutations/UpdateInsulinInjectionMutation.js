import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateInsulinInjectionMutation($id: Float!, $input: InsulinInjectionsPartialInput!) {
    updateInsulinInjection(id: $id, insulinInjectionsPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateInsulinInjectionMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      date: moment(input.date).format(),
      dose: parseFloat(input.dose) || undefined,
      fastActing: parseFloat(input.fastActing) || undefined,
      longActing: parseFloat(input.longActing) || undefined,
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