/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FoodPartialInput = {|
  active?: ?boolean,
  ash?: ?number,
  bKaroten?: ?number,
  calcium?: ?number,
  carbs?: ?number,
  cholesterol?: ?number,
  comment?: ?string,
  copper?: ?number,
  fat?: ?number,
  fibre?: ?number,
  folicAcid?: ?number,
  id?: ?number,
  iron?: ?number,
  kcal?: ?number,
  label?: ?string,
  magnesium?: ?number,
  niacin?: ?number,
  phosphorus?: ?number,
  potassium?: ?number,
  protein?: ?number,
  retinol?: ?number,
  riboflavin?: ?number,
  selenium?: ?number,
  sodium?: ?number,
  source?: ?string,
  sugars?: ?number,
  sumMonounsaturated?: ?number,
  sumPolyunsaturated?: ?number,
  sumSaturated?: ?number,
  tiamin?: ?number,
  unit?: ?string,
  vitaminA?: ?number,
  vitaminB12?: ?number,
  vitaminB6?: ?number,
  vitaminC?: ?number,
  vitaminD?: ?number,
  vitaminE?: ?number,
  vitaminK?: ?number,
  water?: ?number,
  zink?: ?number,
|};
export type UpdateFoodMutationVariables = {|
  id: number,
  input: FoodPartialInput,
|};
export type UpdateFoodMutationResponse = {|
  +updateFood: ?{|
    +_id: ?number
  |}
|};
export type UpdateFoodMutation = {|
  variables: UpdateFoodMutationVariables,
  response: UpdateFoodMutationResponse,
|};
*/


/*
mutation UpdateFoodMutation(
  $id: Float!
  $input: FoodPartialInput!
) {
  updateFood(id: $id, foodPartialInput: $input) {
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
        "name": "foodPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "FoodWithRelations",
    "kind": "LinkedField",
    "name": "updateFood",
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
    "name": "UpdateFoodMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateFoodMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8f4a9b99ae72b43592665a25125f3f24",
    "id": null,
    "metadata": {},
    "name": "UpdateFoodMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateFoodMutation(\n  $id: Float!\n  $input: FoodPartialInput!\n) {\n  updateFood(id: $id, foodPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e51fa9d5ff45fa368bcdac9f1048b288';

module.exports = node;
