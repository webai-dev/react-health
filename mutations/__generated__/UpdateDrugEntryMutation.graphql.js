/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DrugEntryPartialInput = {|
  comment?: ?string,
  dateStarted?: ?string,
  doseAmount?: ?string,
  doseClock?: ?string,
  drugId?: ?number,
  id?: ?number,
  onDemand?: ?boolean,
  pushNotice?: ?boolean,
  userId?: ?number,
|};
export type UpdateDrugEntryMutationVariables = {|
  id: number,
  input: DrugEntryPartialInput,
|};
export type UpdateDrugEntryMutationResponse = {|
  +updateDrugEntry: ?{|
    +_id: ?number
  |}
|};
export type UpdateDrugEntryMutation = {|
  variables: UpdateDrugEntryMutationVariables,
  response: UpdateDrugEntryMutationResponse,
|};
*/


/*
mutation UpdateDrugEntryMutation(
  $id: Float!
  $input: DrugEntryPartialInput!
) {
  updateDrugEntry(id: $id, drugEntryPartialInput: $input) {
    _id: id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "drugEntryPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "DrugEntryWithRelations",
    "kind": "LinkedField",
    "name": "updateDrugEntry",
    "plural": false,
    "selections": [
      {
        "alias": "_id",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateDrugEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateDrugEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2413e6f57a38bab3e6d120624fd35d7f",
    "id": null,
    "metadata": {},
    "name": "UpdateDrugEntryMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateDrugEntryMutation(\n  $id: Float!\n  $input: DrugEntryPartialInput!\n) {\n  updateDrugEntry(id: $id, drugEntryPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec0d5b43775f16722947fa38ce9f25ef';

module.exports = node;
