/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewDiabetesInput = {|
  date: string,
  diabetesStatus: number,
  userId?: ?number,
|};
export type CreateDiabetesMutationVariables = {|
  input: NewDiabetesInput
|};
export type CreateDiabetesMutationResponse = {|
  +createDiabetes: ?{|
    +_id: ?number
  |}
|};
export type CreateDiabetesMutation = {|
  variables: CreateDiabetesMutationVariables,
  response: CreateDiabetesMutationResponse,
|};
*/


/*
mutation CreateDiabetesMutation(
  $input: NewDiabetesInput!
) {
  createDiabetes(newDiabetesInput: $input) {
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
        "name": "newDiabetesInput",
        "variableName": "input"
      }
    ],
    "concreteType": "DiabetesWithRelations",
    "kind": "LinkedField",
    "name": "createDiabetes",
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
    "name": "CreateDiabetesMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateDiabetesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ea632c9c971ce413799f3d0efd805104",
    "id": null,
    "metadata": {},
    "name": "CreateDiabetesMutation",
    "operationKind": "mutation",
    "text": "mutation CreateDiabetesMutation(\n  $input: NewDiabetesInput!\n) {\n  createDiabetes(newDiabetesInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5f34fe2b15f6ab068b08031608503567';

module.exports = node;
