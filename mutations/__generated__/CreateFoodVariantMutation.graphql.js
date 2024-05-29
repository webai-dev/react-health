/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewFoodVariantInput = {|
  amount?: ?number,
  foodId?: ?number,
  label?: ?string,
  serving?: ?string,
  unit?: ?string,
  variant?: ?string,
|};
export type CreateFoodVariantMutationVariables = {|
  input: NewFoodVariantInput
|};
export type CreateFoodVariantMutationResponse = {|
  +createFoodVariant: ?{|
    +_id: number
  |}
|};
export type CreateFoodVariantMutation = {|
  variables: CreateFoodVariantMutationVariables,
  response: CreateFoodVariantMutationResponse,
|};
*/


/*
mutation CreateFoodVariantMutation(
  $input: NewFoodVariantInput!
) {
  createFoodVariant(newFoodVariantInput: $input) {
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
        "name": "newFoodVariantInput",
        "variableName": "input"
      }
    ],
    "concreteType": "FoodVariant",
    "kind": "LinkedField",
    "name": "createFoodVariant",
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
    "name": "CreateFoodVariantMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateFoodVariantMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3bf49d980df1792fd6c196492e3513d3",
    "id": null,
    "metadata": {},
    "name": "CreateFoodVariantMutation",
    "operationKind": "mutation",
    "text": "mutation CreateFoodVariantMutation(\n  $input: NewFoodVariantInput!\n) {\n  createFoodVariant(newFoodVariantInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '16f445555649f3466a072e3799a96de9';

module.exports = node;
