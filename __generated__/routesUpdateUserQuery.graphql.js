/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UpdateUser_viewer$ref = any;
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
export type routesUpdateUserQueryVariables = {|
  id: number,
  filter?: ?UserFilterInput,
|};
export type routesUpdateUserQueryResponse = {|
  +$fragmentRefs: UpdateUser_viewer$ref
|};
export type routesUpdateUserQuery = {|
  variables: routesUpdateUserQueryVariables,
  response: routesUpdateUserQueryResponse,
|};
*/


/*
query routesUpdateUserQuery(
  $id: Float!
  $filter: UserFilterInput
) {
  ...UpdateUser_viewer
}

fragment UpdateUser_viewer on Query {
  user(id: $id, userFilter: $filter) {
    _id: id
    firstName
    lastName
    email
    birthDate
    cellPhone
    userBaseline {
      _id: id
      sex
      age
      height
      aimWeightLoss
      aimGlucoseControl
      aimRiskControl
      aimGoalWeight
      aimWeeksWeight
      usePump
      usePumpType
      useCgm
      useCgmType
      useStrips
      useSmartWatch
      useSmartWatchType
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "filter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesUpdateUserQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UpdateUser_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "routesUpdateUserQuery",
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
          (v2/*: any*/),
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
              (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "020b039b04e9063004fda8b8b34d257a",
    "id": null,
    "metadata": {},
    "name": "routesUpdateUserQuery",
    "operationKind": "query",
    "text": "query routesUpdateUserQuery(\n  $id: Float!\n  $filter: UserFilterInput\n) {\n  ...UpdateUser_viewer\n}\n\nfragment UpdateUser_viewer on Query {\n  user(id: $id, userFilter: $filter) {\n    _id: id\n    firstName\n    lastName\n    email\n    birthDate\n    cellPhone\n    userBaseline {\n      _id: id\n      sex\n      age\n      height\n      aimWeightLoss\n      aimGlucoseControl\n      aimRiskControl\n      aimGoalWeight\n      aimWeeksWeight\n      usePump\n      usePumpType\n      useCgm\n      useCgmType\n      useStrips\n      useSmartWatch\n      useSmartWatchType\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '25c38ee3ed4fb616f84bc84d8ab02d46';

module.exports = node;
