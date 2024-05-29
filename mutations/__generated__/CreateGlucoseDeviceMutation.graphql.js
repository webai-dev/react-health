/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewGlucoseDeviceInput = {|
  clock?: ?string,
  date: string,
  glucose?: ?number,
  userId?: ?number,
|};
export type CreateGlucoseDeviceMutationVariables = {|
  input: NewGlucoseDeviceInput
|};
export type CreateGlucoseDeviceMutationResponse = {|
  +createGlucoseDevice: ?{|
    +_id: ?number
  |}
|};
export type CreateGlucoseDeviceMutation = {|
  variables: CreateGlucoseDeviceMutationVariables,
  response: CreateGlucoseDeviceMutationResponse,
|};
*/


/*
mutation CreateGlucoseDeviceMutation(
  $input: NewGlucoseDeviceInput!
) {
  createGlucoseDevice(newGlucoseDeviceInput: $input) {
    _id: id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "name": "newGlucoseDeviceInput",
        "variableName": "input"
      }
    ],
    "concreteType": "GlucoseDevice",
    "kind": "LinkedField",
    "name": "createGlucoseDevice",
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
    "name": "CreateGlucoseDeviceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateGlucoseDeviceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3bc9991aec2548dda281226935ee3dac",
    "id": null,
    "metadata": {},
    "name": "CreateGlucoseDeviceMutation",
    "operationKind": "mutation",
    "text": "mutation CreateGlucoseDeviceMutation(\n  $input: NewGlucoseDeviceInput!\n) {\n  createGlucoseDevice(newGlucoseDeviceInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9342fec40927cfa6f873ff5c0517ae06';

module.exports = node;
