/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteFoodVariantMutationVariables = {|
  id: number
|};
export type DeleteFoodVariantMutationResponse = {|
  +deleteFoodVariant: ?{|
    +_id: ?number
  |}
|};
export type DeleteFoodVariantMutation = {|
  variables: DeleteFoodVariantMutationVariables,
  response: DeleteFoodVariantMutationResponse,
|};
*/


/*
mutation DeleteFoodVariantMutation(
  $id: Float!
) {
  deleteFoodVariant(id: $id) {
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
    "concreteType": "FoodVariant2",
    "kind": "LinkedField",
    "name": "deleteFoodVariant",
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
    "name": "DeleteFoodVariantMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteFoodVariantMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "312827d70dd715fcbdd5446afe28f7b9",
    "id": null,
    "metadata": {},
    "name": "DeleteFoodVariantMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteFoodVariantMutation(\n  $id: Float!\n) {\n  deleteFoodVariant(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8e6104650abe64196d3f77ebffa8ed8';

module.exports = node;
