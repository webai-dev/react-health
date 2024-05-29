/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserPartialInput = {|
  birthDate?: ?string,
  cellPhone?: ?string,
  dateRegistered?: ?string,
  email?: ?string,
  emailVerifiedAt?: ?string,
  firstName?: ?string,
  id?: ?number,
  lastName?: ?string,
  versionOfTermsAccepted?: ?string,
|};
export type UpdateUserMutationVariables = {|
  id: number,
  input: UserPartialInput,
|};
export type UpdateUserMutationResponse = {|
  +updateUser: ?{|
    +id: ?number
  |}
|};
export type UpdateUserMutation = {|
  variables: UpdateUserMutationVariables,
  response: UpdateUserMutationResponse,
|};
*/


/*
mutation UpdateUserMutation(
  $id: Float!
  $input: UserPartialInput!
) {
  updateUser(id: $id, userPartialInput: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
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
      },
      {
        "kind": "Variable",
        "name": "userPartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "UserWithRelations",
    "kind": "LinkedField",
    "name": "updateUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "UpdateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e8a94725ce9f3159a61eeec28a18fabf",
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $id: Float!\n  $input: UserPartialInput!\n) {\n  updateUser(id: $id, userPartialInput: $input) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0848ddb88122d453e43aaaacdbe2cb6';

module.exports = node;
