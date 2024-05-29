/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewFoodInput = {|
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
  iron?: ?number,
  kcal?: ?number,
  label: string,
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
export type CreateFoodMutationVariables = {|
  input: NewFoodInput
|};
export type CreateFoodMutationResponse = {|
  +createFood: ?{|
    +_id: ?number
  |}
|};
export type CreateFoodMutation = {|
  variables: CreateFoodMutationVariables,
  response: CreateFoodMutationResponse,
|};
*/


/*
mutation CreateFoodMutation(
  $input: NewFoodInput!
) {
  createFood(newFoodInput: $input) {
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
        "name": "newFoodInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Food",
    "kind": "LinkedField",
    "name": "createFood",
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
    "name": "CreateFoodMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateFoodMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "44e5ed1b2c85db1d459c182fe229e37b",
    "id": null,
    "metadata": {},
    "name": "CreateFoodMutation",
    "operationKind": "mutation",
    "text": "mutation CreateFoodMutation(\n  $input: NewFoodInput!\n) {\n  createFood(newFoodInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e122ccb75ce18b6c59e06ed6c9a2a805';

module.exports = node;
