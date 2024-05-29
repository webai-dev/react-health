/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DrugComponent_viewer$ref = any;
type HealthMarkerListComponent_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Patient_viewer$ref: FragmentReference;
declare export opaque type Patient_viewer$fragmentType: Patient_viewer$ref;
export type Patient_viewer = {|
  +viewer: ?{|
    +_id: ?number,
    +email: string,
    +firstName: string,
    +lastName: string,
  |},
  +sharing: ?{|
    +_id: ?number,
    +twilioChatChannel: ?{|
      +channelId: string
    |},
  |},
  +sharer: ?{|
    +_id: ?number,
    +firstName: string,
    +lastName: string,
    +email: string,
    +cellPhone: ?string,
    +birthDate: ?string,
    +userBaseline: ?{|
      +sex: ?string,
      +useCgm: ?boolean,
      +useCgmType: ?string,
      +usePump: ?boolean,
      +usePumpType: ?string,
      +useStrips: ?boolean,
      +aimGoalWeight: ?number,
      +useSmartWatch: ?boolean,
      +useSmartWatchType: ?string,
    |},
  |},
  +anthropometries: ?$ReadOnlyArray<?{|
    +weight: ?number,
    +height: ?number,
    +date: string,
  |}>,
  +diabetes: ?$ReadOnlyArray<?{|
    +diabetesStatus: number,
    +date: string,
  |}>,
  +lifestyles: ?$ReadOnlyArray<?{|
    +exerciseLevel: ?number,
    +date: string,
    +dietType: ?number,
  |}>,
  +$fragmentRefs: HealthMarkerListComponent_viewer$ref & DrugComponent_viewer$ref,
  +$refType: Patient_viewer$ref,
|};
export type Patient_viewer$data = Patient_viewer;
export type Patient_viewer$key = {
  +$data?: Patient_viewer$data,
  +$fragmentRefs: Patient_viewer$ref,
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "anthropometriesFilter"
    },
    {
      "kind": "RootArgument",
      "name": "diabetesFilter"
    },
    {
      "kind": "RootArgument",
      "name": "id"
    },
    {
      "kind": "RootArgument",
      "name": "lifestylesFilter"
    },
    {
      "kind": "RootArgument",
      "name": "sharerId"
    },
    {
      "kind": "RootArgument",
      "name": "sharingFilter"
    },
    {
      "kind": "RootArgument",
      "name": "userFilter"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Patient_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserWithRelations",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    },
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
          "name": "sharingFilter",
          "variableName": "sharingFilter"
        }
      ],
      "concreteType": "SharingWithRelations",
      "kind": "LinkedField",
      "name": "sharing",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "TwilioChatChannelWithRelations",
          "kind": "LinkedField",
          "name": "twilioChatChannel",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "channelId",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "sharer",
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "sharerId"
        },
        {
          "kind": "Variable",
          "name": "userFilter",
          "variableName": "userFilter"
        }
      ],
      "concreteType": "UserWithRelations",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v2/*: any*/),
        (v3/*: any*/),
        (v1/*: any*/),
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
          "kind": "ScalarField",
          "name": "birthDate",
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
              "name": "useStrips",
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
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "anthropometriesFilter",
          "variableName": "anthropometriesFilter"
        }
      ],
      "concreteType": "AnthropometryWithRelations",
      "kind": "LinkedField",
      "name": "anthropometries",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "weight",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "height",
          "storageKey": null
        },
        (v4/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "diabetesFilter",
          "variableName": "diabetesFilter"
        }
      ],
      "concreteType": "DiabetesWithRelations",
      "kind": "LinkedField",
      "name": "diabetes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "diabetesStatus",
          "storageKey": null
        },
        (v4/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "lifestylesFilter",
          "variableName": "lifestylesFilter"
        }
      ],
      "concreteType": "LifestyleWithRelations",
      "kind": "LinkedField",
      "name": "lifestyles",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "exerciseLevel",
          "storageKey": null
        },
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dietType",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HealthMarkerListComponent_viewer"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DrugComponent_viewer"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '690513edcf0980a7911a9cb481cafeee';

module.exports = node;
