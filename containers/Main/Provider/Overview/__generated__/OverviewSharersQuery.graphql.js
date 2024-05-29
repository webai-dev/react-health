/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SharingsFilterInput = {|
  fields?: ?SharingFieldsInput,
  include?: ?$ReadOnlyArray<?SharingIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
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
export type OverviewSharersQueryVariables = {|
  filter?: ?SharingsFilterInput
|};
export type OverviewSharersQueryResponse = {|
  +sharings: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +user: ?{|
      +_id: ?number,
      +firstName: string,
      +lastName: string,
    |},
    +dateStarted: ?string,
    +terminated: ?string,
    +comment: ?string,
    +diabetesControl: ?string,
  |}>
|};
export type OverviewSharersQuery = {|
  variables: OverviewSharersQueryVariables,
  response: OverviewSharersQueryResponse,
|};
*/


/*
query OverviewSharersQuery(
  $filter: SharingsFilterInput
) {
  sharings(sharingsFilter: $filter) {
    _id: id
    user {
      _id: id
      firstName
      lastName
    }
    dateStarted
    terminated
    comment
    diabetesControl
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
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "sharingsFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "SharingWithRelations",
    "kind": "LinkedField",
    "name": "sharings",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "UserWithRelations",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "terminated",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "comment",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "diabetesControl",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OverviewSharersQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OverviewSharersQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2c45357771f73ff392adfd3ce23cab68",
    "id": null,
    "metadata": {},
    "name": "OverviewSharersQuery",
    "operationKind": "query",
    "text": "query OverviewSharersQuery(\n  $filter: SharingsFilterInput\n) {\n  sharings(sharingsFilter: $filter) {\n    _id: id\n    user {\n      _id: id\n      firstName\n      lastName\n    }\n    dateStarted\n    terminated\n    comment\n    diabetesControl\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '234c54d20ce3128d5609180a6e4b91ea';

module.exports = node;
