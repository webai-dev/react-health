/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BloodPressurePartialInput = {|
  date?: ?string,
  diastolic?: ?number,
  id?: ?number,
  systolic?: ?number,
  userId?: ?number,
|};
export type UpdateBloodPressureMutationVariables = {|
  id: number,
  input: BloodPressurePartialInput,
|};
export type UpdateBloodPressureMutationResponse = {|
  +updateBloodPressure: ?{|
    +_id: ?number
  |}
|};
export type UpdateBloodPressureMutation = {|
  variables: UpdateBloodPressureMutationVariables,
  response: UpdateBloodPressureMutationResponse,
|};
*/


/*
mutation UpdateBloodPressureMutation(
  $id: Float!
  $input: BloodPressurePartialInput!
) {
  updateBloodPressure(id: $id, bloodPressurePartialInput: $input) {
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
        "name": "bloodPressurePartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "BloodPressureWithRelations",
    "kind": "LinkedField",
    "name": "updateBloodPressure",
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
    "name": "UpdateBloodPressureMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateBloodPressureMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "06260efc12a2292c3409594a1395994b",
    "id": null,
    "metadata": {},
    "name": "UpdateBloodPressureMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateBloodPressureMutation(\n  $id: Float!\n  $input: BloodPressurePartialInput!\n) {\n  updateBloodPressure(id: $id, bloodPressurePartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '487682c46d6a417bb5ed1b2aa0dfd047';

module.exports = node;
