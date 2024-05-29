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
export type SearchPeopleQueryVariables = {|
  filter?: ?SharingsFilterInput
|};
export type SearchPeopleQueryResponse = {|
  +viewer: ?{|
    +_id: ?number
  |},
  +sharings: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +user: ?{|
      +firstName: string,
      +lastName: string,
      +email: string,
    |},
    +terminated: ?string,
    +userId: ?number,
  |}>,
|};
export type SearchPeopleQuery = {|
  variables: SearchPeopleQueryVariables,
  response: SearchPeopleQueryResponse,
|};
*/


/*
query SearchPeopleQuery(
  $filter: SharingsFilterInput
) {
  viewer {
    _id: id
  }
  sharings(sharingsFilter: $filter) {
    _id: id
    user {
      firstName
      lastName
      email
    }
    terminated
    userId
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
    "args": null,
    "concreteType": "UserWithRelations",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      (v1/*: any*/)
    ],
    "storageKey": null
  },
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
          }
        ],
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
        "name": "userId",
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
    "name": "SearchPeopleQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchPeopleQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d246d51aeb3d9b00217320cf7c03bde2",
    "id": null,
    "metadata": {},
    "name": "SearchPeopleQuery",
    "operationKind": "query",
    "text": "query SearchPeopleQuery(\n  $filter: SharingsFilterInput\n) {\n  viewer {\n    _id: id\n  }\n  sharings(sharingsFilter: $filter) {\n    _id: id\n    user {\n      firstName\n      lastName\n      email\n    }\n    terminated\n    userId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6f33f0b36cf3fdc75c8e96f20719109';

module.exports = node;
