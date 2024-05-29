/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UpdateUser_viewer$ref: FragmentReference;
declare export opaque type UpdateUser_viewer$fragmentType: UpdateUser_viewer$ref;
export type UpdateUser_viewer = {|
  +user: ?{|
    +_id: ?number,
    +firstName: string,
    +lastName: string,
    +email: string,
    +birthDate: ?string,
    +cellPhone: ?string,
    +userBaseline: ?{|
      +_id: ?number,
      +sex: ?string,
      +age: ?number,
      +height: ?number,
      +aimWeightLoss: ?boolean,
      +aimGlucoseControl: ?boolean,
      +aimRiskControl: ?boolean,
      +aimGoalWeight: ?number,
      +aimWeeksWeight: ?number,
      +usePump: ?boolean,
      +usePumpType: ?string,
      +useCgm: ?boolean,
      +useCgmType: ?string,
      +useStrips: ?boolean,
      +useSmartWatch: ?boolean,
      +useSmartWatchType: ?string,
    |},
  |},
  +$refType: UpdateUser_viewer$ref,
|};
export type UpdateUser_viewer$data = UpdateUser_viewer;
export type UpdateUser_viewer$key = {
  +$data?: UpdateUser_viewer$data,
  +$fragmentRefs: UpdateUser_viewer$ref,
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
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "filter"
    },
    {
      "kind": "RootArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UpdateUser_viewer",
  "selections": [
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
          "name": "userFilter",
          "variableName": "filter"
        }
      ],
      "concreteType": "UserWithRelations",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "firstName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lastName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "birthDate",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cellPhone",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "UserBaselineWithRelations",
          "kind": "LinkedField",
          "name": "userBaseline",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "sex",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "age",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "height",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "aimWeightLoss",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "aimGlucoseControl",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "aimRiskControl",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "aimGoalWeight",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "aimWeeksWeight",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "usePump",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "usePumpType",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "useCgm",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "useCgmType",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "useStrips",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "useSmartWatch",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "useSmartWatchType",
              "storageKey": null
            }
          ],
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
(node/*: any*/).hash = 'fb1cb2d0874ada33e46230f0a389aa8b';

module.exports = node;
