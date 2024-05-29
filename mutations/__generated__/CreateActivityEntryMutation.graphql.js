/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewActivityEntryInput = {|
  activityId?: ?number,
  amountMinutes?: ?number,
  date: string,
  energy?: ?number,
  time: string,
  userId?: ?number,
|};
export type CreateActivityEntryMutationVariables = {|
  input: NewActivityEntryInput
|};
export type CreateActivityEntryMutationResponse = {|
  +createActivityEntry: ?{|
    +_id: ?number
  |}
|};
export type CreateActivityEntryMutation = {|
  variables: CreateActivityEntryMutationVariables,
  response: CreateActivityEntryMutationResponse,
|};
*/


/*
mutation CreateActivityEntryMutation(
  $input: NewActivityEntryInput!
) {
  createActivityEntry(newActivityEntryInput: $input) {
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
        "name": "newActivityEntryInput",
        "variableName": "input"
      }
    ],
    "concreteType": "ActivityEntryWithRelations",
    "kind": "LinkedField",
    "name": "createActivityEntry",
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
    "name": "CreateActivityEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateActivityEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "42f66ac741f9fc3a81178fac10b79a5b",
    "id": null,
    "metadata": {},
    "name": "CreateActivityEntryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateActivityEntryMutation(\n  $input: NewActivityEntryInput!\n) {\n  createActivityEntry(newActivityEntryInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3e279955999fa1bba93b60ba8e0dda0f';

module.exports = node;
