/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LifestylePartialInput = {|
  date?: ?string,
  dietType?: ?number,
  exerciseLevel?: ?number,
  id?: ?number,
  smoking?: ?boolean,
  userId?: ?number,
|};
export type UpdateLifestyleMutationVariables = {|
  id: number,
  input: LifestylePartialInput,
|};
export type UpdateLifestyleMutationResponse = {|
  +updateLifestyle: ?{|
    +_id: ?number
  |}
|};
export type UpdateLifestyleMutation = {|
  variables: UpdateLifestyleMutationVariables,
  response: UpdateLifestyleMutationResponse,
|};
*/


/*
mutation UpdateLifestyleMutation(
  $id: Float!
  $input: LifestylePartialInput!
) {
  updateLifestyle(id: $id, lifestylePartialInput: $input) {
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
        "name": "lifestylePartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "LifestyleWithRelations",
    "kind": "LinkedField",
    "name": "updateLifestyle",
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
    "name": "UpdateLifestyleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateLifestyleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "951255f93d287845dc05b9e8589dc581",
    "id": null,
    "metadata": {},
    "name": "UpdateLifestyleMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateLifestyleMutation(\n  $id: Float!\n  $input: LifestylePartialInput!\n) {\n  updateLifestyle(id: $id, lifestylePartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af829698ce973df3f52c94361b66ea83';

module.exports = node;
