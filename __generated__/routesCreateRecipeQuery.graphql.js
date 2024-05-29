/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateRecipe_viewer$ref = any;
export type routesCreateRecipeQueryVariables = {||};
export type routesCreateRecipeQueryResponse = {|
  +$fragmentRefs: CreateRecipe_viewer$ref
|};
export type routesCreateRecipeQuery = {|
  variables: routesCreateRecipeQueryVariables,
  response: routesCreateRecipeQueryResponse,
|};
*/


/*
query routesCreateRecipeQuery {
  ...CreateRecipe_viewer
}

fragment CreateRecipe_viewer on Query {
  recipeCategories {
    _id: id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesCreateRecipeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CreateRecipe_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "routesCreateRecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RecipeCategoryWithRelations",
        "kind": "LinkedField",
        "name": "recipeCategories",
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
    ]
  },
  "params": {
    "cacheID": "e6ecda2a03e8cd0a86f91c9c48633830",
    "id": null,
    "metadata": {},
    "name": "routesCreateRecipeQuery",
    "operationKind": "query",
    "text": "query routesCreateRecipeQuery {\n  ...CreateRecipe_viewer\n}\n\nfragment CreateRecipe_viewer on Query {\n  recipeCategories {\n    _id: id\n    title\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '19f5b42d478994dcb0f3e714de3ec461';

module.exports = node;
