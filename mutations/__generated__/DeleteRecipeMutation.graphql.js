/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRecipeMutationVariables = {|
  id: number
|};
export type DeleteRecipeMutationResponse = {|
  +deleteRecipe: ?{|
    +_id: ?number
  |}
|};
export type DeleteRecipeMutation = {|
  variables: DeleteRecipeMutationVariables,
  response: DeleteRecipeMutationResponse,
|};
*/


/*
mutation DeleteRecipeMutation(
  $id: Float!
) {
  deleteRecipe(id: $id) {
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
    "concreteType": "Recipe2",
    "kind": "LinkedField",
    "name": "deleteRecipe",
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
    "name": "DeleteRecipeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteRecipeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "69af57c89fad7c9e6ac2ef117023d6e0",
    "id": null,
    "metadata": {},
    "name": "DeleteRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRecipeMutation(\n  $id: Float!\n) {\n  deleteRecipe(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '38e0ec9eede28e9c9be1173b33bd90ed';

module.exports = node;
