/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NotePartialInput = {|
  createdAt?: ?string,
  id?: ?number,
  text?: ?string,
  title?: ?string,
  updatedAt?: ?string,
  userId?: ?number,
|};
export type UpdateNoteMutationVariables = {|
  id: number,
  input: NotePartialInput,
|};
export type UpdateNoteMutationResponse = {|
  +updateNote: ?{|
    +id: ?number
  |}
|};
export type UpdateNoteMutation = {|
  variables: UpdateNoteMutationVariables,
  response: UpdateNoteMutationResponse,
|};
*/


/*
mutation UpdateNoteMutation(
  $id: Float!
  $input: NotePartialInput!
) {
  updateNote(id: $id, notePartialInput: $input) {
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
        "name": "notePartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "NoteWithRelations",
    "kind": "LinkedField",
    "name": "updateNote",
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
    "name": "UpdateNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateNoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9d0a5d4b86acd4f4514212e90c5e3c99",
    "id": null,
    "metadata": {},
    "name": "UpdateNoteMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateNoteMutation(\n  $id: Float!\n  $input: NotePartialInput!\n) {\n  updateNote(id: $id, notePartialInput: $input) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1de2b220fca7878eb44abc70a0aba33';

module.exports = node;
