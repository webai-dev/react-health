/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UpdateRecipe_viewer$ref: FragmentReference;
declare export opaque type UpdateRecipe_viewer$fragmentType: UpdateRecipe_viewer$ref;
export type UpdateRecipe_viewer = {|
  +recipeCategories: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +title: string,
  |}>,
  +recipe: ?{|
    +_id: ?number,
    +title: string,
    +description: ?string,
    +ingredients: ?string,
    +taxonomyIngredients: ?string,
    +instructions: ?string,
    +kcalPerServing: ?number,
    +servings: ?number,
    +prepTime: ?number,
    +cookTime: ?number,
    +totalTime: ?number,
    +imgUrl: ?string,
    +imgDispName: ?string,
    +totalFatG: ?number,
    +saturatedFatG: ?number,
    +cholesterolMg: ?number,
    +sodiumMg: ?number,
    +carbTotalG: ?number,
    +carbFiberG: ?number,
    +sugarsG: ?number,
    +carbStarchG: ?number,
    +proteinG: ?number,
    +taxonomyMealType: ?string,
    +taxonomyDishType: ?string,
    +taxonomyCookingStyle: ?string,
    +taxonomyCuisine: ?string,
    +taxonomyDietHealth: ?string,
    +taxonomyGluten: ?string,
    +taxonomyNuts: ?string,
    +recipeCategoryId: ?number,
  |},
  +$refType: UpdateRecipe_viewer$ref,
|};
export type UpdateRecipe_viewer$data = UpdateRecipe_viewer;
export type UpdateRecipe_viewer$key = {
  +$data?: UpdateRecipe_viewer$data,
  +$fragmentRefs: UpdateRecipe_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UpdateRecipe_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RecipeCategoryWithRelations",
      "kind": "LinkedField",
      "name": "recipeCategories",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
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
        (v0/*: any*/),
        (v1/*: any*/),
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
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '5637ae0fa456d1b2123645ba57961eb9';

module.exports = node;
