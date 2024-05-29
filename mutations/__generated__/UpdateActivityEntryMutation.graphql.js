/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ActivityEntryPartialInput = {|
  activityId?: ?number,
  amountMinutes?: ?number,
  date?: ?string,
  energy?: ?number,
  id?: ?number,
  time?: ?string,
  userId?: ?number,
|};
export type UpdateActivityEntryMutationVariables = {|
  id: number,
  input: ActivityEntryPartialInput,
|};
export type UpdateActivityEntryMutationResponse = {|
  +updateActivityEntry: ?{|
    +_id: ?number
  |}
|};
export type UpdateActivityEntryMutation = {|
  variables: UpdateActivityEntryMutationVariables,
  response: UpdateActivityEntryMutationResponse,
|};
*/


/*
mutation UpdateActivityEntryMutation(
  $id: Float!
  $input: ActivityEntryPartialInput!
) {
  updateActivityEntry(id: $id, activityEntryPartialInput: $input) {
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
        "name": "activityEntryPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ActivityEntryWithRelations",
    "kind": "LinkedField",
    "name": "updateActivityEntry",
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
    "name": "UpdateActivityEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateActivityEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ce99a537418b174f1e8364c24f78ac0e",
    "id": null,
    "metadata": {},
    "name": "UpdateActivityEntryMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateActivityEntryMutation(\n  $id: Float!\n  $input: ActivityEntryPartialInput!\n) {\n  updateActivityEntry(id: $id, activityEntryPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c1fdc620a98c3274f7fe6d2816c7f357';

module.exports = node;
