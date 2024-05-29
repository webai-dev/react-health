/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrugComponent_viewer$ref: FragmentReference;
declare export opaque type DrugComponent_viewer$fragmentType: DrugComponent_viewer$ref;
export type DrugComponent_viewer = {|
  +drugEntries: ?$ReadOnlyArray<?{|
    +drug: ?{|
      +dose: ?string,
      +labelTitle: ?string,
      +manufacturer: ?string,
    |},
    +dateStarted: ?string,
  |}>,
  +$refType: DrugComponent_viewer$ref,
|};
export type DrugComponent_viewer$data = DrugComponent_viewer;
export type DrugComponent_viewer$key = {
  +$data?: DrugComponent_viewer$data,
  +$fragmentRefs: DrugComponent_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "drugEntriesFilter"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "DrugComponent_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "drugEntriesFilter",
          "variableName": "drugEntriesFilter"
        }
      ],
      "concreteType": "DrugEntryWithRelations",
      "kind": "LinkedField",
      "name": "drugEntries",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DrugWithRelations",
          "kind": "LinkedField",
          "name": "drug",
          "plural": false,
          "selections": [
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
              "name": "labelTitle",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "manufacturer",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dateStarted",
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
(node/*: any*/).hash = '7abf6c99d45d6f3a72d3200e5065a000';

module.exports = node;
