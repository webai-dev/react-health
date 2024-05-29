/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteDiabetesMutationVariables = {|
  id: number
|};
export type DeleteDiabetesMutationResponse = {|
  +deleteDiabetes: ?{|
    +_id: ?number
  |}
|};
export type DeleteDiabetesMutation = {|
  variables: DeleteDiabetesMutationVariables,
  response: DeleteDiabetesMutationResponse,
|};
*/


/*
mutation DeleteDiabetesMutation(
  $id: Float!
) {
  deleteDiabetes(id: $id) {
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
    "concreteType": "Diabetes4",
    "kind": "LinkedField",
    "name": "deleteDiabetes",
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
    "name": "DeleteDiabetesMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteDiabetesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2445c8ed913b2ed80642f130fca77f02",
    "id": null,
    "metadata": {},
    "name": "DeleteDiabetesMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteDiabetesMutation(\n  $id: Float!\n) {\n  deleteDiabetes(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8416e31b4eba686cf01570ddca70d8a3';

module.exports = node;
