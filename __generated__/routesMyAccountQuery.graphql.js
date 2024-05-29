/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyAccount_viewer$ref = any;
export type ViewerFilterInput = {|
  fields?: ?UserFieldsInput,
  include?: ?$ReadOnlyArray<?UserIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
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
export type routesMyAccountQueryVariables = {|
  filter?: ?ViewerFilterInput
|};
export type routesMyAccountQueryResponse = {|
  +$fragmentRefs: MyAccount_viewer$ref
|};
export type routesMyAccountQuery = {|
  variables: routesMyAccountQueryVariables,
  response: routesMyAccountQueryResponse,
|};
*/


/*
query routesMyAccountQuery(
  $filter: ViewerFilterInput
) {
  ...MyAccount_viewer
}

fragment MyAccount_viewer on Query {
  viewer(viewerFilter: $filter) {
    _id: id
    email
    firstName
    lastName
    cellPhone
    sharers {
      _id: id
      dateStarted
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "routesMyAccountQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MyAccount_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "routesMyAccountQuery",
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
          (v1/*: any*/),
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
            "name": "cellPhone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SharingWithRelations",
            "kind": "LinkedField",
            "name": "sharers",
            "plural": true,
            "selections": [
              (v1/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6c619315454bc00377a2236e5ca22c4b",
    "id": null,
    "metadata": {},
    "name": "routesMyAccountQuery",
    "operationKind": "query",
    "text": "query routesMyAccountQuery(\n  $filter: ViewerFilterInput\n) {\n  ...MyAccount_viewer\n}\n\nfragment MyAccount_viewer on Query {\n  viewer(viewerFilter: $filter) {\n    _id: id\n    email\n    firstName\n    lastName\n    cellPhone\n    sharers {\n      _id: id\n      dateStarted\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58bd561913f2ff989a40504683ca658e';

module.exports = node;
