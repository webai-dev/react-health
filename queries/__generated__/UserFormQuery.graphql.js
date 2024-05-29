/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserFormQueryVariables = {|
  id: number
|};
export type UserFormQueryResponse = {|
  +user: ?{|
    +firstName: string,
    +lastName: string,
    +email: string,
    +birthDate: ?string,
    +cellPhone: ?string,
  |}
|};
export type UserFormQuery = {|
  variables: UserFormQueryVariables,
  response: UserFormQueryResponse,
|};
*/


/*
query UserFormQuery(
  $id: Float!
) {
  user(id: $id) {
    firstName
    lastName
    email
    birthDate
    cellPhone
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
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
    "name": "UserFormQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserFormQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7ddaf4082902b62b2f41d4a8a7ba2710",
    "id": null,
    "metadata": {},
    "name": "UserFormQuery",
    "operationKind": "query",
    "text": "query UserFormQuery(\n  $id: Float!\n) {\n  user(id: $id) {\n    firstName\n    lastName\n    email\n    birthDate\n    cellPhone\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99803711100aa5966949638c49f1774d';

module.exports = node;
