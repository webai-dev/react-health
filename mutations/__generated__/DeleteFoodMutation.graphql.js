/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteFoodMutationVariables = {|
  id: number
|};
export type DeleteFoodMutationResponse = {|
  +deleteFood: ?{|
    +_id: ?number
  |}
|};
export type DeleteFoodMutation = {|
  variables: DeleteFoodMutationVariables,
  response: DeleteFoodMutationResponse,
|};
*/


/*
mutation DeleteFoodMutation(
  $id: Float!
) {
  deleteFood(id: $id) {
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
    "concreteType": "Food2",
    "kind": "LinkedField",
    "name": "deleteFood",
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
    "name": "DeleteFoodMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteFoodMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "98d0b2e3917f776ff8ed1549f7b144a5",
    "id": null,
    "metadata": {},
    "name": "DeleteFoodMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteFoodMutation(\n  $id: Float!\n) {\n  deleteFood(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ee4a6c13b8c09914b2920bf9ed733da4';

module.exports = node;
