/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Patient_viewer$ref = any;
export type SharingFilterInput = {|
  fields?: ?SharingFieldsInput,
  include?: ?$ReadOnlyArray<?SharingIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
|};
export type SharingFieldsInput = {|
  comment?: ?boolean,
  dateStarted?: ?boolean,
  diabetesControl?: ?boolean,
  email?: ?boolean,
  id?: ?boolean,
  name?: ?boolean,
  phone?: ?boolean,
  providerId?: ?boolean,
  terminated?: ?boolean,
  twilioChatChannelId?: ?boolean,
  userId?: ?boolean,
|};
export type SharingIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?SharingScopeFilterInput,
|};
export type SharingScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorsFilterInput = {|
  fields?: ?HealthMarkerMonitorFieldsInput,
  include?: ?$ReadOnlyArray<?HealthMarkerMonitorIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorFieldsInput = {|
  healthMarkerId?: ?boolean,
  id?: ?boolean,
  providerId?: ?boolean,
  userId?: ?boolean,
|};
export type HealthMarkerMonitorIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?HealthMarkerMonitorScopeFilterInput,
|};
export type HealthMarkerMonitorScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorIntervalsFilterInput = {|
  fields?: ?HealthMarkerMonitorIntervalFieldsInput,
  include?: ?$ReadOnlyArray<?HealthMarkerMonitorIntervalIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorIntervalFieldsInput = {|
  healthMarkerMonitorId?: ?boolean,
  id?: ?boolean,
  lowerTarget?: ?boolean,
  providerId?: ?boolean,
  upperTarget?: ?boolean,
  userId?: ?boolean,
|};
export type HealthMarkerMonitorIntervalIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?HealthMarkerMonitorIntervalScopeFilterInput,
|};
export type HealthMarkerMonitorIntervalScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DrugEntriesFilterInput = {|
  fields?: ?DrugEntryFieldsInput,
  include?: ?$ReadOnlyArray<?DrugEntryIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DrugEntryFieldsInput = {|
  comment?: ?boolean,
  dateStarted?: ?boolean,
  doseAmount?: ?boolean,
  doseClock?: ?boolean,
  drugId?: ?boolean,
  id?: ?boolean,
  onDemand?: ?boolean,
  pushNotice?: ?boolean,
  userId?: ?boolean,
|};
export type DrugEntryIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?DrugEntryScopeFilterInput,
|};
export type DrugEntryScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type UserFilterInput = {|
  fields?: ?UserFieldsInput,
  include?: ?$ReadOnlyArray<?UserIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
|};
export type UserFieldsInput = {|
  birthDate?: ?boolean,
  cellPhone?: ?boolean,
  dateRegistered?: ?boolean,
  email?: ?boolean,
  emailVerifiedAt?: ?boolean,
  firstName?: ?boolean,
  id?: ?boolean,
  lastName?: ?boolean,
  versionOfTermsAccepted?: ?boolean,
|};
export type UserIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?UserScopeFilterInput,
|};
export type UserScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type AnthropometriesFilterInput = {|
  fields?: ?AnthropometryFieldsInput,
  include?: ?$ReadOnlyArray<?AnthropometryIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type AnthropometryFieldsInput = {|
  arms?: ?boolean,
  bmi?: ?boolean,
  chest?: ?boolean,
  date?: ?boolean,
  height?: ?boolean,
  id?: ?boolean,
  userId?: ?boolean,
  waist?: ?boolean,
  weight?: ?boolean,
|};
export type AnthropometryIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?AnthropometryScopeFilterInput,
|};
export type AnthropometryScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DiabetesFilterInput = {|
  fields?: ?DiabetesFieldsInput,
  include?: ?$ReadOnlyArray<?DiabetesIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DiabetesFieldsInput = {|
  date?: ?boolean,
  diabetesStatus?: ?boolean,
  id?: ?boolean,
  userId?: ?boolean,
|};
export type DiabetesIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?DiabetesScopeFilterInput,
|};
export type DiabetesScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type LifestylesFilterInput = {|
  fields?: ?LifestyleFieldsInput,
  include?: ?$ReadOnlyArray<?LifestyleIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type LifestyleFieldsInput = {|
  date?: ?boolean,
  dietType?: ?boolean,
  exerciseLevel?: ?boolean,
  id?: ?boolean,
  smoking?: ?boolean,
  userId?: ?boolean,
|};
export type LifestyleIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?LifestyleScopeFilterInput,
|};
export type LifestyleScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type routesPatientQueryVariables = {|
  id: number,
  sharerId: number,
  sharingFilter?: ?SharingFilterInput,
  healthMarkerMonitorsFilter?: ?HealthMarkerMonitorsFilterInput,
  healthMarkerMonitorIntervalsFilter?: ?HealthMarkerMonitorIntervalsFilterInput,
  drugEntriesFilter?: ?DrugEntriesFilterInput,
  userFilter?: ?UserFilterInput,
  anthropometriesFilter?: ?AnthropometriesFilterInput,
  diabetesFilter?: ?DiabetesFilterInput,
  lifestylesFilter?: ?LifestylesFilterInput,
|};
export type routesPatientQueryResponse = {|
  +$fragmentRefs: Patient_viewer$ref
|};
export type routesPatientQuery = {|
  variables: routesPatientQueryVariables,
  response: routesPatientQueryResponse,
|};
*/


/*
query routesPatientQuery(
  $id: Float!
  $sharerId: Float!
  $sharingFilter: SharingFilterInput
  $healthMarkerMonitorsFilter: HealthMarkerMonitorsFilterInput
  $healthMarkerMonitorIntervalsFilter: HealthMarkerMonitorIntervalsFilterInput
  $drugEntriesFilter: DrugEntriesFilterInput
  $userFilter: UserFilterInput
  $anthropometriesFilter: AnthropometriesFilterInput
  $diabetesFilter: DiabetesFilterInput
  $lifestylesFilter: LifestylesFilterInput
) {
  ...Patient_viewer
}

fragment DrugComponent_viewer on Query {
  drugEntries(drugEntriesFilter: $drugEntriesFilter) {
    drug {
      dose
      labelTitle
      manufacturer
    }
    dateStarted
  }
}

fragment HealthMarkerListComponent_viewer on Query {
  viewer {
    _id: id
  }
  healthMarkers {
    _id: id
    reference
    marker
    unit
  }
  healthMarkerMonitors(healthMarkerMonitorsFilter: $healthMarkerMonitorsFilter) {
    _id: id
    userId
    providerId
    healthMarkerId
  }
  healthMarkerMonitorIntervals(healthMarkerMonitorIntervalsFilter: $healthMarkerMonitorIntervalsFilter) {
    _id: id
    userId
    providerId
    upperTarget
    lowerTarget
    healthMarkerMonitorId
  }
}

fragment Patient_viewer on Query {
  viewer {
    _id: id
    email
    firstName
    lastName
  }
  sharing(id: $id, sharingFilter: $sharingFilter) {
    _id: id
    twilioChatChannel {
      channelId
    }
  }
  sharer: user(id: $sharerId, userFilter: $userFilter) {
    _id: id
    firstName
    lastName
    email
    cellPhone
    birthDate
    userBaseline {
      sex
      useCgm
      useCgmType
      usePump
      usePumpType
      useStrips
      aimGoalWeight
      useSmartWatch
      useSmartWatchType
    }
  }
  anthropometries(anthropometriesFilter: $anthropometriesFilter) {
    weight
    height
    date
  }
  diabetes(diabetesFilter: $diabetesFilter) {
    diabetesStatus
    date
  }
  lifestyles(lifestylesFilter: $lifestylesFilter) {
    exerciseLevel
    date
    dietType
  }
  ...HealthMarkerListComponent_viewer
  ...DrugComponent_viewer
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "anthropometriesFilter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "diabetesFilter"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "drugEntriesFilter"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "healthMarkerMonitorIntervalsFilter"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "healthMarkerMonitorsFilter"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lifestylesFilter"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sharerId"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sharingFilter"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userFilter"
},
v10 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userId",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "providerId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesPatientQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Patient_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v5/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v9/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "routesPatientQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserWithRelations",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/)
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
          (v10/*: any*/),
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
          (v10/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v11/*: any*/),
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
          (v14/*: any*/)
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
          (v14/*: any*/)
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
          (v14/*: any*/),
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
        "alias": null,
        "args": null,
        "concreteType": "HealthMarkerWithRelations",
        "kind": "LinkedField",
        "name": "healthMarkers",
        "plural": true,
        "selections": [
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "reference",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "marker",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "unit",
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
            "name": "healthMarkerMonitorsFilter",
            "variableName": "healthMarkerMonitorsFilter"
          }
        ],
        "concreteType": "HealthMarkerMonitorWithRelations",
        "kind": "LinkedField",
        "name": "healthMarkerMonitors",
        "plural": true,
        "selections": [
          (v10/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "healthMarkerId",
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
            "name": "healthMarkerMonitorIntervalsFilter",
            "variableName": "healthMarkerMonitorIntervalsFilter"
          }
        ],
        "concreteType": "HealthMarkerMonitorIntervalWithRelations",
        "kind": "LinkedField",
        "name": "healthMarkerMonitorIntervals",
        "plural": true,
        "selections": [
          (v10/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "upperTarget",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lowerTarget",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "healthMarkerMonitorId",
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
    ]
  },
  "params": {
    "cacheID": "bbafd431f1136baee2661279c5fe3141",
    "id": null,
    "metadata": {},
    "name": "routesPatientQuery",
    "operationKind": "query",
    "text": "query routesPatientQuery(\n  $id: Float!\n  $sharerId: Float!\n  $sharingFilter: SharingFilterInput\n  $healthMarkerMonitorsFilter: HealthMarkerMonitorsFilterInput\n  $healthMarkerMonitorIntervalsFilter: HealthMarkerMonitorIntervalsFilterInput\n  $drugEntriesFilter: DrugEntriesFilterInput\n  $userFilter: UserFilterInput\n  $anthropometriesFilter: AnthropometriesFilterInput\n  $diabetesFilter: DiabetesFilterInput\n  $lifestylesFilter: LifestylesFilterInput\n) {\n  ...Patient_viewer\n}\n\nfragment DrugComponent_viewer on Query {\n  drugEntries(drugEntriesFilter: $drugEntriesFilter) {\n    drug {\n      dose\n      labelTitle\n      manufacturer\n    }\n    dateStarted\n  }\n}\n\nfragment HealthMarkerListComponent_viewer on Query {\n  viewer {\n    _id: id\n  }\n  healthMarkers {\n    _id: id\n    reference\n    marker\n    unit\n  }\n  healthMarkerMonitors(healthMarkerMonitorsFilter: $healthMarkerMonitorsFilter) {\n    _id: id\n    userId\n    providerId\n    healthMarkerId\n  }\n  healthMarkerMonitorIntervals(healthMarkerMonitorIntervalsFilter: $healthMarkerMonitorIntervalsFilter) {\n    _id: id\n    userId\n    providerId\n    upperTarget\n    lowerTarget\n    healthMarkerMonitorId\n  }\n}\n\nfragment Patient_viewer on Query {\n  viewer {\n    _id: id\n    email\n    firstName\n    lastName\n  }\n  sharing(id: $id, sharingFilter: $sharingFilter) {\n    _id: id\n    twilioChatChannel {\n      channelId\n    }\n  }\n  sharer: user(id: $sharerId, userFilter: $userFilter) {\n    _id: id\n    firstName\n    lastName\n    email\n    cellPhone\n    birthDate\n    userBaseline {\n      sex\n      useCgm\n      useCgmType\n      usePump\n      usePumpType\n      useStrips\n      aimGoalWeight\n      useSmartWatch\n      useSmartWatchType\n    }\n  }\n  anthropometries(anthropometriesFilter: $anthropometriesFilter) {\n    weight\n    height\n    date\n  }\n  diabetes(diabetesFilter: $diabetesFilter) {\n    diabetesStatus\n    date\n  }\n  lifestyles(lifestylesFilter: $lifestylesFilter) {\n    exerciseLevel\n    date\n    dietType\n  }\n  ...HealthMarkerListComponent_viewer\n  ...DrugComponent_viewer\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e44c3436329afec60498798a13a271e';

module.exports = node;
