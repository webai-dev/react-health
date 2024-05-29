/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewDrugEntryInput = {|
  comment?: ?string,
  dateStarted?: ?string,
  doseAmount?: ?string,
  doseClock?: ?string,
  drugId?: ?number,
  onDemand?: ?boolean,
  pushNotice?: ?boolean,
  userId?: ?number,
|};
export type CreateDrugEntryMutationVariables = {|
  input: NewDrugEntryInput
|};
export type CreateDrugEntryMutationResponse = {|
  +createDrugEntry: ?{|
    +_id: ?number
  |}
|};
export type CreateDrugEntryMutation = {|
  variables: CreateDrugEntryMutationVariables,
  response: CreateDrugEntryMutationResponse,
|};
*/


/*
mutation CreateDrugEntryMutation(
  $input: NewDrugEntryInput!
) {
  createDrugEntry(newDrugEntryInput: $input) {
    _id: id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "name": "newDrugEntryInput",
        "variableName": "input"
      }
    ],
    "concreteType": "DrugEntry",
    "kind": "LinkedField",
    "name": "createDrugEntry",
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
    "name": "CreateDrugEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateDrugEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e9d355f34a9aca9b64dc05cd20830dea",
    "id": null,
    "metadata": {},
    "name": "CreateDrugEntryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateDrugEntryMutation(\n  $input: NewDrugEntryInput!\n) {\n  createDrugEntry(newDrugEntryInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29c50d5f3c239e68a378d63cc61de115';

module.exports = node;
