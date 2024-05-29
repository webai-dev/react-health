/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateRecipe_viewer$ref: FragmentReference;
declare export opaque type CreateRecipe_viewer$fragmentType: CreateRecipe_viewer$ref;
export type CreateRecipe_viewer = {|
  +recipeCategories: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +title: string,
  |}>,
  +$refType: CreateRecipe_viewer$ref,
|};
export type CreateRecipe_viewer$data = CreateRecipe_viewer;
export type CreateRecipe_viewer$key = {
  +$data?: CreateRecipe_viewer$data,
  +$fragmentRefs: CreateRecipe_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateRecipe_viewer",
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
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '06030a488203dacb2551292e1f37eee5';

module.exports = node;
