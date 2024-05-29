/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FoodsFilterInput = {|
  fields?: ?FoodFieldsInput,
  include?: ?$ReadOnlyArray<?FoodIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type FoodFieldsInput = {|
  active?: ?boolean,
  ash?: ?boolean,
  bKaroten?: ?boolean,
  calcium?: ?boolean,
  carbs?: ?boolean,
  cholesterol?: ?boolean,
  comment?: ?boolean,
  copper?: ?boolean,
  fat?: ?boolean,
  fibre?: ?boolean,
  folicAcid?: ?boolean,
  id?: ?boolean,
  iron?: ?boolean,
  kcal?: ?boolean,
  label?: ?boolean,
  magnesium?: ?boolean,
  niacin?: ?boolean,
  phosphorus?: ?boolean,
  potassium?: ?boolean,
  protein?: ?boolean,
  retinol?: ?boolean,
  riboflavin?: ?boolean,
  selenium?: ?boolean,
  sodium?: ?boolean,
  source?: ?boolean,
  sugars?: ?boolean,
  sumMonounsaturated?: ?boolean,
  sumPolyunsaturated?: ?boolean,
  sumSaturated?: ?boolean,
  tiamin?: ?boolean,
  unit?: ?boolean,
  vitaminA?: ?boolean,
  vitaminB12?: ?boolean,
  vitaminB6?: ?boolean,
  vitaminC?: ?boolean,
  vitaminD?: ?boolean,
  vitaminE?: ?boolean,
  vitaminK?: ?boolean,
  water?: ?boolean,
  zink?: ?boolean,
|};
export type FoodIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?FoodScopeFilterInput,
|};
export type FoodScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type SearchFoodQueryVariables = {|
  filter?: ?FoodsFilterInput
|};
export type SearchFoodQueryResponse = {|
  +foods: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +label: string,
  |}>
|};
export type SearchFoodQuery = {|
  variables: SearchFoodQueryVariables,
  response: SearchFoodQueryResponse,
|};
*/


/*
query SearchFoodQuery(
  $filter: FoodsFilterInput
) {
  foods(foodsFilter: $filter) {
    _id: id
    label
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "foodsFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "FoodWithRelations",
    "kind": "LinkedField",
    "name": "foods",
    "plural": true,
    "selections": [
      {
        "alias": "_id",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
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
    "name": "SearchFoodQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchFoodQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "73e61eec4a5095ffd5eeea0fcda00a13",
    "id": null,
    "metadata": {},
    "name": "SearchFoodQuery",
    "operationKind": "query",
    "text": "query SearchFoodQuery(\n  $filter: FoodsFilterInput\n) {\n  foods(foodsFilter: $filter) {\n    _id: id\n    label\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '771245ac604f2e4b8886acfa678814ef';

module.exports = node;
