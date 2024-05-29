/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteGlucoseDeviceMutationVariables = {|
  id: number
|};
export type DeleteGlucoseDeviceMutationResponse = {|
  +deleteGlucoseDevice: ?{|
    +_id: ?number
  |}
|};
export type DeleteGlucoseDeviceMutation = {|
  variables: DeleteGlucoseDeviceMutationVariables,
  response: DeleteGlucoseDeviceMutationResponse,
|};
*/


/*
mutation DeleteGlucoseDeviceMutation(
  $id: Float!
) {
  deleteGlucoseDevice(id: $id) {
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
    "concreteType": "GlucoseDevice2",
    "kind": "LinkedField",
    "name": "deleteGlucoseDevice",
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
    "name": "DeleteGlucoseDeviceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteGlucoseDeviceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "56d0664b3d16317814c3c9395ce08f2c",
    "id": null,
    "metadata": {},
    "name": "DeleteGlucoseDeviceMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteGlucoseDeviceMutation(\n  $id: Float!\n) {\n  deleteGlucoseDevice(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1efb9d0d7ca25e640d23ac6d562d37f5';

module.exports = node;
