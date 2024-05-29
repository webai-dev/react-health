/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AdminUserQueryVariables = {||};
export type AdminUserQueryResponse = {|
  +users: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +firstName: string,
    +lastName: string,
  |}>
|};
export type AdminUserQuery = {|
  variables: AdminUserQueryVariables,
  response: AdminUserQueryResponse,
|};
*/


/*
query AdminUserQuery {
  users {
    _id: id
    firstName
    lastName
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AdminUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AdminUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "50f3feb09ac6cd8e2ec7e7bfba877813",
    "id": null,
    "metadata": {},
    "name": "AdminUserQuery",
    "operationKind": "query",
    "text": "query AdminUserQuery {\n  users {\n    _id: id\n    firstName\n    lastName\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4735b63dc0cc72497c0ce6a711dd3a63';

module.exports = node;
