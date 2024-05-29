/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteNoteMutationVariables = {|
  id: number
|};
export type DeleteNoteMutationResponse = {|
  +deleteNote: ?{|
    +_id: ?number
  |}
|};
export type DeleteNoteMutation = {|
  variables: DeleteNoteMutationVariables,
  response: DeleteNoteMutationResponse,
|};
*/


/*
mutation DeleteNoteMutation(
  $id: Float!
) {
  deleteNote(id: $id) {
    _id: id
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
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "deleteNote",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteNoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c9142d0063bbead2cf39e70f0c5869d1",
    "id": null,
    "metadata": {},
    "name": "DeleteNoteMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteNoteMutation(\n  $id: Float!\n) {\n  deleteNote(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd2f85dac7284bf68378e23e0b89ed69f';

module.exports = node;
