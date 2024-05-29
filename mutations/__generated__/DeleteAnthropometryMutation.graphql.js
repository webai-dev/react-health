/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAnthropometryMutationVariables = {|
  id: number
|};
export type DeleteAnthropometryMutationResponse = {|
  +deleteAnthropometry: ?{|
    +_id: ?number
  |}
|};
export type DeleteAnthropometryMutation = {|
  variables: DeleteAnthropometryMutationVariables,
  response: DeleteAnthropometryMutationResponse,
|};
*/


/*
mutation DeleteAnthropometryMutation(
  $id: Float!
) {
  deleteAnthropometry(id: $id) {
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
    "concreteType": "Anthropometry2",
    "kind": "LinkedField",
    "name": "deleteAnthropometry",
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
    "name": "DeleteAnthropometryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteAnthropometryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e97ac93c31c7bb099fc0f77c81511a80",
    "id": null,
    "metadata": {},
    "name": "DeleteAnthropometryMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteAnthropometryMutation(\n  $id: Float!\n) {\n  deleteAnthropometry(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de095cc3c17b73ab69f9bb040ae8acb8';

module.exports = node;
