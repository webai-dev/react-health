/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewCalorieInput = {|
  burned?: ?number,
  carbohydrates?: ?number,
  consumed?: ?number,
  date: string,
  fat?: ?number,
  protein?: ?number,
  userId?: ?number,
  waterConsumption?: ?number,
|};
export type CreateCalorieMutationVariables = {|
  input: NewCalorieInput
|};
export type CreateCalorieMutationResponse = {|
  +createCalorie: ?{|
    +_id: ?number
  |}
|};
export type CreateCalorieMutation = {|
  variables: CreateCalorieMutationVariables,
  response: CreateCalorieMutationResponse,
|};
*/


/*
mutation CreateCalorieMutation(
  $input: NewCalorieInput!
) {
  createCalorie(newCalorieInput: $input) {
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
        "name": "newCalorieInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Calory",
    "kind": "LinkedField",
    "name": "createCalorie",
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
    "name": "CreateCalorieMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCalorieMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f9bbabea031f79aed1c308d55fc5e8a6",
    "id": null,
    "metadata": {},
    "name": "CreateCalorieMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCalorieMutation(\n  $input: NewCalorieInput!\n) {\n  createCalorie(newCalorieInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6ca1f20b8e9e273b80eb88bc75f05d3';

module.exports = node;
