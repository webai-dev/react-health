/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewAnthropometryInput = {|
  arms?: ?number,
  bmi?: ?number,
  chest?: ?number,
  date: string,
  height?: ?number,
  userId?: ?number,
  waist?: ?number,
  weight?: ?number,
|};
export type CreateAnthropometryMutationVariables = {|
  input: NewAnthropometryInput
|};
export type CreateAnthropometryMutationResponse = {|
  +createAnthropometry: ?{|
    +_id: ?number
  |}
|};
export type CreateAnthropometryMutation = {|
  variables: CreateAnthropometryMutationVariables,
  response: CreateAnthropometryMutationResponse,
|};
*/


/*
mutation CreateAnthropometryMutation(
  $input: NewAnthropometryInput!
) {
  createAnthropometry(newAnthropometryInput: $input) {
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
        "name": "newAnthropometryInput",
        "variableName": "input"
      }
    ],
    "concreteType": "AnthropometryWithRelations",
    "kind": "LinkedField",
    "name": "createAnthropometry",
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
    "name": "CreateAnthropometryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateAnthropometryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5d04c56293c9a7b8c5b2cf8d1adab3cf",
    "id": null,
    "metadata": {},
    "name": "CreateAnthropometryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAnthropometryMutation(\n  $input: NewAnthropometryInput!\n) {\n  createAnthropometry(newAnthropometryInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '28215bf7f3661e2f63d94f997324ee10';

module.exports = node;
