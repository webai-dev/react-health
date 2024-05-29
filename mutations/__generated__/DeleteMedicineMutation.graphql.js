/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteMedicineMutationVariables = {|
  id: number
|};
export type DeleteMedicineMutationResponse = {|
  +deleteDrug: ?{|
    +_id: ?number
  |}
|};
export type DeleteMedicineMutation = {|
  variables: DeleteMedicineMutationVariables,
  response: DeleteMedicineMutationResponse,
|};
*/


/*
mutation DeleteMedicineMutation(
  $id: Float!
) {
  deleteDrug(id: $id) {
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
    "concreteType": "Drug2",
    "kind": "LinkedField",
    "name": "deleteDrug",
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
    "name": "DeleteMedicineMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteMedicineMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a2fc3bf68cc1a90f5a0e2141f4f396db",
    "id": null,
    "metadata": {},
    "name": "DeleteMedicineMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteMedicineMutation(\n  $id: Float!\n) {\n  deleteDrug(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd5612b7dd18517eee4a5c031fdedde7';

module.exports = node;
