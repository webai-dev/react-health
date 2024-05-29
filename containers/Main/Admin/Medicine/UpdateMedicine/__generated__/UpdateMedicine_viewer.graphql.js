/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UpdateMedicine_viewer$ref: FragmentReference;
declare export opaque type UpdateMedicine_viewer$fragmentType: UpdateMedicine_viewer$ref;
export type UpdateMedicine_viewer = {|
  +drug: ?{|
    +_id: ?number,
    +atc: ?string,
    +labelTitle: ?string,
    +labelSubTitle: ?string,
    +manufacturer: ?string,
    +dose: ?string,
    +delivery: ?string,
    +activeSubstance: ?string,
    +icon: ?string,
  |},
  +$refType: UpdateMedicine_viewer$ref,
|};
export type UpdateMedicine_viewer$data = UpdateMedicine_viewer;
export type UpdateMedicine_viewer$key = {
  +$data?: UpdateMedicine_viewer$data,
  +$fragmentRefs: UpdateMedicine_viewer$ref,
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
  "name": "UpdateMedicine_viewer",
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
      "concreteType": "DrugWithRelations",
      "kind": "LinkedField",
      "name": "drug",
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
          "name": "atc",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "labelTitle",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "labelSubTitle",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "manufacturer",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dose",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "delivery",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "activeSubstance",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "icon",
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
(node/*: any*/).hash = '44ef71965e3f93d34f2273ee8a533744';

module.exports = node;
