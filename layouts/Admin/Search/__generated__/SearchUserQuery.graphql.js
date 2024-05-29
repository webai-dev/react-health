/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UsersFilterInput = {|
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
export type SearchUserQueryVariables = {|
  filter?: ?UsersFilterInput
|};
export type SearchUserQueryResponse = {|
  +users: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +firstName: string,
    +lastName: string,
  |}>
|};
export type SearchUserQuery = {|
  variables: SearchUserQueryVariables,
  response: SearchUserQueryResponse,
|};
*/


/*
query SearchUserQuery(
  $filter: UsersFilterInput
) {
  users(usersFilter: $filter) {
    _id: id
    firstName
    lastName
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "usersFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "UserWithRelations",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0ca3f4051804edd915b7db80187b8862",
    "id": null,
    "metadata": {},
    "name": "SearchUserQuery",
    "operationKind": "query",
    "text": "query SearchUserQuery(\n  $filter: UsersFilterInput\n) {\n  users(usersFilter: $filter) {\n    _id: id\n    firstName\n    lastName\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '41c049f342dec60f919c2d28ef550178';

module.exports = node;
