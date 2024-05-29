/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewRecipeInput = {|
  carbFiberG?: ?number,
  carbStarchG?: ?number,
  carbTotalG?: ?number,
  cholesterolMg?: ?number,
  cookTime?: ?number,
  description?: ?string,
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
  title: string,
  totalFatG?: ?number,
  totalTime?: ?number,
|};
export type CreateRecipeMutationVariables = {|
  input: NewRecipeInput
|};
export type CreateRecipeMutationResponse = {|
  +createRecipe: ?{|
    +_id: ?number
  |}
|};
export type CreateRecipeMutation = {|
  variables: CreateRecipeMutationVariables,
  response: CreateRecipeMutationResponse,
|};
*/


/*
mutation CreateRecipeMutation(
  $input: NewRecipeInput!
) {
  createRecipe(newRecipeInput: $input) {
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
        "name": "newRecipeInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Recipe",
    "kind": "LinkedField",
    "name": "createRecipe",
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
    "name": "CreateRecipeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateRecipeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ef5917c2c36937017e9cbb4cf598cdf1",
    "id": null,
    "metadata": {},
    "name": "CreateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRecipeMutation(\n  $input: NewRecipeInput!\n) {\n  createRecipe(newRecipeInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c127de95013a61235a3a403daa91173e';

module.exports = node;
