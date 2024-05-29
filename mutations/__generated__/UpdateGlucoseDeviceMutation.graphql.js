/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GlucoseDevicesPartialInput = {|
  clock?: ?string,
  date?: ?string,
  glucose?: ?number,
  id?: ?number,
  userId?: ?number,
|};
export type UpdateGlucoseDeviceMutationVariables = {|
  id: number,
  input: GlucoseDevicesPartialInput,
|};
export type UpdateGlucoseDeviceMutationResponse = {|
  +updateGlucoseDevice: ?{|
    +_id: ?number
  |}
|};
export type UpdateGlucoseDeviceMutation = {|
  variables: UpdateGlucoseDeviceMutationVariables,
  response: UpdateGlucoseDeviceMutationResponse,
|};
*/


/*
mutation UpdateGlucoseDeviceMutation(
  $id: Float!
  $input: GlucoseDevicesPartialInput!
) {
  updateGlucoseDevice(id: $id, glucoseDevicesPartialInput: $input) {
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
        "name": "glucoseDevicesPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "GlucoseDevicesWithRelations",
    "kind": "LinkedField",
    "name": "updateGlucoseDevice",
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
    "name": "UpdateGlucoseDeviceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateGlucoseDeviceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "da6171ea646336cd3217f755eb6d4e5b",
    "id": null,
    "metadata": {},
    "name": "UpdateGlucoseDeviceMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateGlucoseDeviceMutation(\n  $id: Float!\n  $input: GlucoseDevicesPartialInput!\n) {\n  updateGlucoseDevice(id: $id, glucoseDevicesPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0d335cca1238cfaa2f5b37f5feef4f1f';

module.exports = node;
