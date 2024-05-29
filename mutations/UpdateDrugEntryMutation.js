import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation UpdateDrugEntryMutation($id: Float!, $input: DrugEntryPartialInput!) {
    updateDrugEntry(id: $id, drugEntryPartialInput: $input) {
      _id: id
    }
  }
`;

export default function UpdateDrugEntryMutation(id: Number, input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      comment: input.comment,
      dateStarted: moment(input.dateStarted).format(),
      drugId: parseFloat(input.drugId) || undefined,
      onDemand: input.onDemand,
      pushNotice: input.pushNotice,
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