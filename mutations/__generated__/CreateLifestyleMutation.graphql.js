/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewLifestyleInput = {|
  date: string,
  dietType?: ?number,
  exerciseLevel?: ?number,
  smoking?: ?boolean,
  userId?: ?number,
|};
export type CreateLifestyleMutationVariables = {|
  input: NewLifestyleInput
|};
export type CreateLifestyleMutationResponse = {|
  +createLifestyle: ?{|
    +_id: ?number
  |}
|};
export type CreateLifestyleMutation = {|
  variables: CreateLifestyleMutationVariables,
  response: CreateLifestyleMutationResponse,
|};
*/


/*
mutation CreateLifestyleMutation(
  $input: NewLifestyleInput!
) {
  createLifestyle(newLifestyleInput: $input) {
    _id: id
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
        "name": "newLifestyleInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Lifestyle",
    "kind": "LinkedField",
    "name": "createLifestyle",
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
    "name": "CreateLifestyleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateLifestyleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "319ff59ab1c699faeee2ead49dcec89f",
    "id": null,
    "metadata": {},
    "name": "CreateLifestyleMutation",
    "operationKind": "mutation",
    "text": "mutation CreateLifestyleMutation(\n  $input: NewLifestyleInput!\n) {\n  createLifestyle(newLifestyleInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '55e2f88fc49908877e0f4ab2353e9e0a';

module.exports = node;
