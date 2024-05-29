/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FoodVariantPartialInput = {|
  amount?: ?number,
  foodId?: ?number,
  id?: ?number,
  label?: ?string,
  serving?: ?string,
  unit?: ?string,
  variant?: ?string,
|};
export type UpdateFoodVariantMutationVariables = {|
  id: number,
  input: FoodVariantPartialInput,
|};
export type UpdateFoodVariantMutationResponse = {|
  +updateFoodVariant: ?{|
    +_id: number
  |}
|};
export type UpdateFoodVariantMutation = {|
  variables: UpdateFoodVariantMutationVariables,
  response: UpdateFoodVariantMutationResponse,
|};
*/


/*
mutation UpdateFoodVariantMutation(
  $id: Float!
  $input: FoodVariantPartialInput!
) {
  updateFoodVariant(id: $id, foodVariantPartialInput: $input) {
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
        "name": "foodVariantPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "FoodVariantWithRelations",
    "kind": "LinkedField",
    "name": "updateFoodVariant",
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
    "name": "UpdateFoodVariantMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateFoodVariantMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aff4943e8a4b0c328178c4ec83fbfa55",
    "id": null,
    "metadata": {},
    "name": "UpdateFoodVariantMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateFoodVariantMutation(\n  $id: Float!\n  $input: FoodVariantPartialInput!\n) {\n  updateFoodVariant(id: $id, foodVariantPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57671ee2ffbdb2dff3cdff33da1d2336';

module.exports = node;
