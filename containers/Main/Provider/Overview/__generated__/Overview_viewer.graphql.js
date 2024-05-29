/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Overview_viewer$ref: FragmentReference;
declare export opaque type Overview_viewer$fragmentType: Overview_viewer$ref;
export type Overview_viewer = {|
  +viewer: ?{|
    +_id: ?number
  |},
  +$refType: Overview_viewer$ref,
|};
export type Overview_viewer$data = Overview_viewer;
export type Overview_viewer$key = {
  +$data?: Overview_viewer$data,
  +$fragmentRefs: Overview_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "filter"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Overview_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "viewerFilter",
          "variableName": "filter"
        }
      ],
      "concreteType": "UserWithRelations",
      "kind": "LinkedField",
      "name": "viewer",
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
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '5efedf4c9e3ac6394111077c07e5393a';

module.exports = node;
