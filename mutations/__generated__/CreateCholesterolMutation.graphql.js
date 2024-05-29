/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewCholesterolInput = {|
  date: string,
  hdlChol?: ?number,
  ldlChol?: ?number,
  totalChol?: ?number,
  triglycerides?: ?number,
  userId?: ?number,
|};
export type CreateCholesterolMutationVariables = {|
  input: NewCholesterolInput
|};
export type CreateCholesterolMutationResponse = {|
  +createCholesterol: ?{|
    +_id: ?number
  |}
|};
export type CreateCholesterolMutation = {|
  variables: CreateCholesterolMutationVariables,
  response: CreateCholesterolMutationResponse,
|};
*/


/*
mutation CreateCholesterolMutation(
  $input: NewCholesterolInput!
) {
  createCholesterol(newCholesterolInput: $input) {
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
        "name": "newCholesterolInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Cholesterol",
    "kind": "LinkedField",
    "name": "createCholesterol",
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
    "name": "CreateCholesterolMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCholesterolMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "68978563e56386f60f04cdb4305008f5",
    "id": null,
    "metadata": {},
    "name": "CreateCholesterolMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCholesterolMutation(\n  $input: NewCholesterolInput!\n) {\n  createCholesterol(newCholesterolInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8109cbc0a7fb7690235e5b4be6155966';

module.exports = node;
