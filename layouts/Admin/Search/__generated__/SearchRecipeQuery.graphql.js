/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RecipesFilterInput = {|
  fields?: ?RecipeFieldsInput,
  include?: ?$ReadOnlyArray<?RecipeIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type RecipeFieldsInput = {|
  carbFiberG?: ?boolean,
  carbStarchG?: ?boolean,
  carbTotalG?: ?boolean,
  cholesterolMg?: ?boolean,
  cookTime?: ?boolean,
  description?: ?boolean,
  id?: ?boolean,
  imgDispName?: ?boolean,
  imgUrl?: ?boolean,
  ingredients?: ?boolean,
  instructions?: ?boolean,
  kcalPerServing?: ?boolean,
  prepTime?: ?boolean,
  proteinG?: ?boolean,
  recipeCategoryId?: ?boolean,
  saturatedFatG?: ?boolean,
  servings?: ?boolean,
  sodiumMg?: ?boolean,
  sugarsG?: ?boolean,
  taxonomyCookingStyle?: ?boolean,
  taxonomyCuisine?: ?boolean,
  taxonomyDietHealth?: ?boolean,
  taxonomyDishType?: ?boolean,
  taxonomyGluten?: ?boolean,
  taxonomyIngredients?: ?boolean,
  taxonomyMealType?: ?boolean,
  taxonomyNuts?: ?boolean,
  title?: ?boolean,
  totalFatG?: ?boolean,
  totalTime?: ?boolean,
|};
export type RecipeIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?RecipeScopeFilterInput,
|};
export type RecipeScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type SearchRecipeQueryVariables = {|
  filter?: ?RecipesFilterInput
|};
export type SearchRecipeQueryResponse = {|
  +recipes: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +title: string,
  |}>
|};
export type SearchRecipeQuery = {|
  variables: SearchRecipeQueryVariables,
  response: SearchRecipeQueryResponse,
|};
*/


/*
query SearchRecipeQuery(
  $filter: RecipesFilterInput
) {
  recipes(recipesFilter: $filter) {
    _id: id
    title
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
        "name": "recipesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "RecipeWithRelations",
    "kind": "LinkedField",
    "name": "recipes",
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
        "name": "title",
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
    "name": "SearchRecipeQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchRecipeQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5196afb4b5fb1b09be162e88fb312a30",
    "id": null,
    "metadata": {},
    "name": "SearchRecipeQuery",
    "operationKind": "query",
    "text": "query SearchRecipeQuery(\n  $filter: RecipesFilterInput\n) {\n  recipes(recipesFilter: $filter) {\n    _id: id\n    title\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '66c38d476c132322cab4164c81f899b8';

module.exports = node;
