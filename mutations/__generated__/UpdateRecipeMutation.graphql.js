/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RecipePartialInput = {|
  carbFiberG?: ?number,
  carbStarchG?: ?number,
  carbTotalG?: ?number,
  cholesterolMg?: ?number,
  cookTime?: ?number,
  description?: ?string,
  id?: ?number,
  imgDispName?: ?string,
  imgUrl?: ?string,
  ingredients?: ?string,
  instructions?: ?string,
  kcalPerServing?: ?number,
  prepTime?: ?number,
  proteinG?: ?number,
  recipeCategoryId?: ?number,
  saturatedFatG?: ?number,
  servings?: ?number,
  sodiumMg?: ?number,
  sugarsG?: ?number,
  taxonomyCookingStyle?: ?string,
  taxonomyCuisine?: ?string,
  taxonomyDietHealth?: ?string,
  taxonomyDishType?: ?string,
  taxonomyGluten?: ?string,
  taxonomyIngredients?: ?string,
  taxonomyMealType?: ?string,
  taxonomyNuts?: ?string,
  title?: ?string,
  totalFatG?: ?number,
  totalTime?: ?number,
|};
export type UpdateRecipeMutationVariables = {|
  id: number,
  input: RecipePartialInput,
|};
export type UpdateRecipeMutationResponse = {|
  +updateRecipe: ?{|
    +_id: ?number
  |}
|};
export type UpdateRecipeMutation = {|
  variables: UpdateRecipeMutationVariables,
  response: UpdateRecipeMutationResponse,
|};
*/


/*
mutation UpdateRecipeMutation(
  $id: Float!
  $input: RecipePartialInput!
) {
  updateRecipe(id: $id, recipePartialInput: $input) {
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
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "recipePartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "RecipeWithRelations",
    "kind": "LinkedField",
    "name": "updateRecipe",
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
    "name": "UpdateRecipeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateRecipeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "96d07b0fc8ef82f4fd82c108fd77d0cc",
    "id": null,
    "metadata": {},
    "name": "UpdateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRecipeMutation(\n  $id: Float!\n  $input: RecipePartialInput!\n) {\n  updateRecipe(id: $id, recipePartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bf3d89c3b8aa7e137e5a3076e1f1b45f';

module.exports = node;
