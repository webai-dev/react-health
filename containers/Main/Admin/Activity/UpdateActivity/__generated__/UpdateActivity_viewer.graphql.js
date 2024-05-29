/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UpdateActivity_viewer$ref: FragmentReference;
declare export opaque type UpdateActivity_viewer$fragmentType: UpdateActivity_viewer$ref;
export type UpdateActivity_viewer = {|
  +activity: ?{|
    +_id: ?number,
    +met: number,
    +label: string,
    +type: ?string,
    +metMinute: ?number,
  |},
  +$refType: UpdateActivity_viewer$ref,
|};
export type UpdateActivity_viewer$data = UpdateActivity_viewer;
export type UpdateActivity_viewer$key = {
  +$data?: UpdateActivity_viewer$data,
  +$fragmentRefs: UpdateActivity_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UpdateActivity_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id"
        }
      ],
      "concreteType": "ActivityWithRelations",
      "kind": "LinkedField",
      "name": "activity",
      "plural": false,
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
          "name": "met",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "metMinute",
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
(node/*: any*/).hash = '0cedbf3e282c0accd6cb85c7429f6745';

module.exports = node;
