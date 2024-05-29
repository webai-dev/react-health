/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteBloodPressureMutationVariables = {|
  id: number
|};
export type DeleteBloodPressureMutationResponse = {|
  +deleteBloodPressure: ?{|
    +_id: ?number
  |}
|};
export type DeleteBloodPressureMutation = {|
  variables: DeleteBloodPressureMutationVariables,
  response: DeleteBloodPressureMutationResponse,
|};
*/


/*
mutation DeleteBloodPressureMutation(
  $id: Float!
) {
  deleteBloodPressure(id: $id) {
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
    "concreteType": "BloodPressure2",
    "kind": "LinkedField",
    "name": "deleteBloodPressure",
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
    "name": "DeleteBloodPressureMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteBloodPressureMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b6f74bfae3f35ec8de8f0c9a6b0d7f85",
    "id": null,
    "metadata": {},
    "name": "DeleteBloodPressureMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteBloodPressureMutation(\n  $id: Float!\n) {\n  deleteBloodPressure(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8332b99e9e292b45570c3d8d04366c08';

module.exports = node;
