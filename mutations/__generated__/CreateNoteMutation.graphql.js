/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewNoteInput = {|
  createdAt?: ?string,
  text?: ?string,
  title: string,
  updatedAt?: ?string,
  userId?: ?number,
|};
export type CreateNoteMutationVariables = {|
  input: NewNoteInput
|};
export type CreateNoteMutationResponse = {|
  +createNote: ?{|
    +title: string
  |}
|};
export type CreateNoteMutation = {|
  variables: CreateNoteMutationVariables,
  response: CreateNoteMutationResponse,
|};
*/


/*
mutation CreateNoteMutation(
  $input: NewNoteInput!
) {
  createNote(newNoteInput: $input) {
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "name": "newNoteInput",
        "variableName": "input"
      }
    ],
    "concreteType": "NoteWithRelations",
    "kind": "LinkedField",
    "name": "createNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
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
    "name": "CreateNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateNoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ca5d2371f87a46ccd3f05dd4692c6e69",
    "id": null,
    "metadata": {},
    "name": "CreateNoteMutation",
    "operationKind": "mutation",
    "text": "mutation CreateNoteMutation(\n  $input: NewNoteInput!\n) {\n  createNote(newNoteInput: $input) {\n    title\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4ce1cb5e39a268113b0cf39c95b09f80';

module.exports = node;
