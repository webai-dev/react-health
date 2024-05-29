/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewKidneyInput = {|
  creatinine?: ?number,
  date: string,
  egfr?: ?number,
  ualbkrea?: ?number,
  userId?: ?number,
|};
export type CreateKidneyMutationVariables = {|
  input: NewKidneyInput
|};
export type CreateKidneyMutationResponse = {|
  +createKidney: ?{|
    +_id: ?number
  |}
|};
export type CreateKidneyMutation = {|
  variables: CreateKidneyMutationVariables,
  response: CreateKidneyMutationResponse,
|};
*/


/*
mutation CreateKidneyMutation(
  $input: NewKidneyInput!
) {
  createKidney(newKidneyInput: $input) {
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
        "name": "newKidneyInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Kidney",
    "kind": "LinkedField",
    "name": "createKidney",
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
    "name": "CreateKidneyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateKidneyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2849e9a70a58d52b5f4ce4ab86394981",
    "id": null,
    "metadata": {},
    "name": "CreateKidneyMutation",
    "operationKind": "mutation",
    "text": "mutation CreateKidneyMutation(\n  $input: NewKidneyInput!\n) {\n  createKidney(newKidneyInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '08fa03a8c36078812603994ac931782d';

module.exports = node;
