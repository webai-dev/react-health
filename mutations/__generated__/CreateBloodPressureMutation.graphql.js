/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewBloodPressureInput = {|
  date: string,
  diastolic?: ?number,
  systolic?: ?number,
  userId?: ?number,
|};
export type CreateBloodPressureMutationVariables = {|
  input: NewBloodPressureInput
|};
export type CreateBloodPressureMutationResponse = {|
  +createBloodPressure: ?{|
    +_id: ?number
  |}
|};
export type CreateBloodPressureMutation = {|
  variables: CreateBloodPressureMutationVariables,
  response: CreateBloodPressureMutationResponse,
|};
*/


/*
mutation CreateBloodPressureMutation(
  $input: NewBloodPressureInput!
) {
  createBloodPressure(newBloodPressureInput: $input) {
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
        "name": "newBloodPressureInput",
        "variableName": "input"
      }
    ],
    "concreteType": "BloodPressure",
    "kind": "LinkedField",
    "name": "createBloodPressure",
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
    "name": "CreateBloodPressureMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateBloodPressureMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3ce09486c94abee16dbc856f796817f5",
    "id": null,
    "metadata": {},
    "name": "CreateBloodPressureMutation",
    "operationKind": "mutation",
    "text": "mutation CreateBloodPressureMutation(\n  $input: NewBloodPressureInput!\n) {\n  createBloodPressure(newBloodPressureInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '74d78ec432268519ee8a7244cf74bef6';

module.exports = node;
