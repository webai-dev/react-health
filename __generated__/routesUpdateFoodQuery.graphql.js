/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UpdateFood_viewer$ref = any;
export type FoodFilterInput = {|
  fields?: ?FoodFieldsInput,
  include?: ?$ReadOnlyArray<?FoodIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
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
export type routesUpdateFoodQueryVariables = {|
  id: number,
  filter?: ?FoodFilterInput,
|};
export type routesUpdateFoodQueryResponse = {|
  +$fragmentRefs: UpdateFood_viewer$ref
|};
export type routesUpdateFoodQuery = {|
  variables: routesUpdateFoodQueryVariables,
  response: routesUpdateFoodQueryResponse,
|};
*/


/*
query routesUpdateFoodQuery(
  $id: Float!
  $filter: FoodFilterInput
) {
  ...UpdateFood_viewer
}

fragment UpdateFood_viewer on Query {
  food(id: $id, foodFilter: $filter) {
    _id: id
    label
    unit
    kcal
    carbs
    fat
    protein
    fibre
    water
    ash
    sugars
    sumSaturated
    sumMonounsaturated
    sumPolyunsaturated
    cholesterol
    retinol
    vitaminA
    bKaroten
    vitaminD
    vitaminE
    vitaminK
    tiamin
    riboflavin
    vitaminC
    niacin
    vitaminB6
    vitaminB12
    folicAcid
    phosphorus
    iron
    calcium
    potassium
    copper
    magnesium
    sodium
    selenium
    zink
    source
    comment
    active
    foodVariants {
      _id: id
      amount
      label
      serving
      unit
      variant
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "filter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unit",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesUpdateFoodQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UpdateFood_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "routesUpdateFoodQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "foodFilter",
            "variableName": "filter"
          },
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "concreteType": "FoodWithRelations",
        "kind": "LinkedField",
        "name": "food",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "kcal",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "carbs",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "protein",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fibre",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "water",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ash",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sugars",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sumSaturated",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sumMonounsaturated",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sumPolyunsaturated",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cholesterol",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "retinol",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vitaminA",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bKaroten",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vitaminD",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vitaminE",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vitaminK",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tiamin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "riboflavin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vitaminC",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "niacin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vitaminB6",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vitaminB12",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "folicAcid",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phosphorus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "iron",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "calcium",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "potassium",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "copper",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "magnesium",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sodium",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "selenium",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "zink",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "source",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "comment",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "active",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FoodVariantWithRelations",
            "kind": "LinkedField",
            "name": "foodVariants",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "amount",
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "serving",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "variant",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e1f89b528b98f936e15934cd057a530",
    "id": null,
    "metadata": {},
    "name": "routesUpdateFoodQuery",
    "operationKind": "query",
    "text": "query routesUpdateFoodQuery(\n  $id: Float!\n  $filter: FoodFilterInput\n) {\n  ...UpdateFood_viewer\n}\n\nfragment UpdateFood_viewer on Query {\n  food(id: $id, foodFilter: $filter) {\n    _id: id\n    label\n    unit\n    kcal\n    carbs\n    fat\n    protein\n    fibre\n    water\n    ash\n    sugars\n    sumSaturated\n    sumMonounsaturated\n    sumPolyunsaturated\n    cholesterol\n    retinol\n    vitaminA\n    bKaroten\n    vitaminD\n    vitaminE\n    vitaminK\n    tiamin\n    riboflavin\n    vitaminC\n    niacin\n    vitaminB6\n    vitaminB12\n    folicAcid\n    phosphorus\n    iron\n    calcium\n    potassium\n    copper\n    magnesium\n    sodium\n    selenium\n    zink\n    source\n    comment\n    active\n    foodVariants {\n      _id: id\n      amount\n      label\n      serving\n      unit\n      variant\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2d2eecdd640124b70b6ca4349a1ec5f3';

module.exports = node;
