import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateDrugEntryMutation($input: NewDrugEntryInput!) {
    createDrugEntry(newDrugEntryInput: $input) {
      _id: id
    }
  }
`;


export default function CreateDrugEntriesMutation(input: Object) {
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
      input,
    };

    commitMutation(environment, {
      mutation,
      variables,
      updater: store => {
        const payload = store.getRootField('createDrugEntry');
        const id = payload.getValue('id');
        resolve(id);
      },
      onError: (err) => reject(err),
    });
  });
}