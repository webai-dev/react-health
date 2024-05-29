/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UpdateRecipe_viewer$ref = any;
export type routesUpdateRecipeQueryVariables = {|
  id: number
|};
export type routesUpdateRecipeQueryResponse = {|
  +$fragmentRefs: UpdateRecipe_viewer$ref
|};
export type routesUpdateRecipeQuery = {|
  variables: routesUpdateRecipeQueryVariables,
  response: routesUpdateRecipeQueryResponse,
|};
*/


/*
query routesUpdateRecipeQuery(
  $id: Float!
) {
  ...UpdateRecipe_viewer
}

fragment UpdateRecipe_viewer on Query {
  recipeCategories {
    _id: id
    title
  }
  recipe(id: $id) {
    _id: id
    title
    description
    ingredients
    taxonomyIngredients
    instructions
    kcalPerServing
    servings
    prepTime
    cookTime
    totalTime
    imgUrl
    imgDispName
    totalFatG
    saturatedFatG
    cholesterolMg
    sodiumMg
    carbTotalG
    carbFiberG
    sugarsG
    carbStarchG
    proteinG
    taxonomyMealType
    taxonomyDishType
    taxonomyCookingStyle
    taxonomyCuisine
    taxonomyDietHealth
    taxonomyGluten
    taxonomyNuts
    recipeCategoryId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "routesUpdateRecipeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UpdateRecipe_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "routesUpdateRecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RecipeCategoryWithRelations",
        "kind": "LinkedField",
        "name": "recipeCategories",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "concreteType": "RecipeWithRelations",
        "kind": "LinkedField",
        "name": "recipe",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ingredients",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxonomyIngredients",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "instructions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "kcalPerServing",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "servings",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "prepTime",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cookTime",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalTime",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imgUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imgDispName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalFatG",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "saturatedFatG",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cholesterolMg",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sodiumMg",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "carbTotalG",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "carbFiberG",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sugarsG",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "carbStarchG",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "proteinG",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxonomyMealType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxonomyDishType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxonomyCookingStyle",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxonomyCuisine",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxonomyDietHealth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxonomyGluten",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxonomyNuts",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "recipeCategoryId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2064637c6e69eb5edc0e51648d8ff470",
    "id": null,
    "metadata": {},
    "name": "routesUpdateRecipeQuery",
    "operationKind": "query",
    "text": "query routesUpdateRecipeQuery(\n  $id: Float!\n) {\n  ...UpdateRecipe_viewer\n}\n\nfragment UpdateRecipe_viewer on Query {\n  recipeCategories {\n    _id: id\n    title\n  }\n  recipe(id: $id) {\n    _id: id\n    title\n    description\n    ingredients\n    taxonomyIngredients\n    instructions\n    kcalPerServing\n    servings\n    prepTime\n    cookTime\n    totalTime\n    imgUrl\n    imgDispName\n    totalFatG\n    saturatedFatG\n    cholesterolMg\n    sodiumMg\n    carbTotalG\n    carbFiberG\n    sugarsG\n    carbStarchG\n    proteinG\n    taxonomyMealType\n    taxonomyDishType\n    taxonomyCookingStyle\n    taxonomyCuisine\n    taxonomyDietHealth\n    taxonomyGluten\n    taxonomyNuts\n    recipeCategoryId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa07dcc87b933447c1901b62c8d27d62';

module.exports = node;
