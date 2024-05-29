/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteFoodEntryMutationVariables = {|
  id: number
|};
export type DeleteFoodEntryMutationResponse = {|
  +deleteFoodEntry: ?{|
    +_id: ?number
  |}
|};
export type DeleteFoodEntryMutation = {|
  variables: DeleteFoodEntryMutationVariables,
  response: DeleteFoodEntryMutationResponse,
|};
*/


/*
mutation DeleteFoodEntryMutation(
  $id: Float!
) {
  deleteFoodEntry(id: $id) {
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
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "FoodEntry2",
    "kind": "LinkedField",
    "name": "deleteFoodEntry",
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
    "name": "DeleteFoodEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteFoodEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f0b8ce828d4de9574688f95e60350d09",
    "id": null,
    "metadata": {},
    "name": "DeleteFoodEntryMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteFoodEntryMutation(\n  $id: Float!\n) {\n  deleteFoodEntry(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7d1aa6700f9056e1928a6db1386c77ec';

module.exports = node;
