/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Overview_viewer$ref = any;
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
export type routesMyOverviewQueryVariables = {|
  filter?: ?ViewerFilterInput
|};
export type routesMyOverviewQueryResponse = {|
  +$fragmentRefs: Overview_viewer$ref
|};
export type routesMyOverviewQuery = {|
  variables: routesMyOverviewQueryVariables,
  response: routesMyOverviewQueryResponse,
|};
*/


/*
query routesMyOverviewQuery(
  $filter: ViewerFilterInput
) {
  ...Overview_viewer
}

fragment Overview_viewer on Query {
  viewer(viewerFilter: $filter) {
    _id: id
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "routesMyOverviewQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Overview_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "routesMyOverviewQuery",
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
    ]
  },
  "params": {
    "cacheID": "727d98f5084f196f9c15ca96c162a34f",
    "id": null,
    "metadata": {},
    "name": "routesMyOverviewQuery",
    "operationKind": "query",
    "text": "query routesMyOverviewQuery(\n  $filter: ViewerFilterInput\n) {\n  ...Overview_viewer\n}\n\nfragment Overview_viewer on Query {\n  viewer(viewerFilter: $filter) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '001551cdcc1227cd33f165359901a723';

module.exports = node;
