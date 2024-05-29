/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCalorieMutationVariables = {|
  id: number
|};
export type DeleteCalorieMutationResponse = {|
  +deleteCalorie: ?{|
    +_id: ?number
  |}
|};
export type DeleteCalorieMutation = {|
  variables: DeleteCalorieMutationVariables,
  response: DeleteCalorieMutationResponse,
|};
*/


/*
mutation DeleteCalorieMutation(
  $id: Float!
) {
  deleteCalorie(id: $id) {
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
    "concreteType": "Calory2",
    "kind": "LinkedField",
    "name": "deleteCalorie",
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
    "name": "DeleteCalorieMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteCalorieMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "28aeae0c229d5dc9f1cb9e37c7213498",
    "id": null,
    "metadata": {},
    "name": "DeleteCalorieMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCalorieMutation(\n  $id: Float!\n) {\n  deleteCalorie(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bdab39ee8172758b229a404ae0d6a7d7';

module.exports = node;
