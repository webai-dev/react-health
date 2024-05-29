/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CholesterolPartialInput = {|
  date?: ?string,
  hdlChol?: ?number,
  id?: ?number,
  ldlChol?: ?number,
  totalChol?: ?number,
  triglycerides?: ?number,
  userId?: ?number,
|};
export type UpdateCholesterolMutationVariables = {|
  id: number,
  input: CholesterolPartialInput,
|};
export type UpdateCholesterolMutationResponse = {|
  +updateCholesterol: ?{|
    +_id: ?number
  |}
|};
export type UpdateCholesterolMutation = {|
  variables: UpdateCholesterolMutationVariables,
  response: UpdateCholesterolMutationResponse,
|};
*/


/*
mutation UpdateCholesterolMutation(
  $id: Float!
  $input: CholesterolPartialInput!
) {
  updateCholesterol(id: $id, cholesterolPartialInput: $input) {
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
        "name": "cholesterolPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "CholesterolWithRelations",
    "kind": "LinkedField",
    "name": "updateCholesterol",
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
    "name": "UpdateCholesterolMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateCholesterolMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6a5f4bcfa4768cd6e54f15d8a46dda19",
    "id": null,
    "metadata": {},
    "name": "UpdateCholesterolMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCholesterolMutation(\n  $id: Float!\n  $input: CholesterolPartialInput!\n) {\n  updateCholesterol(id: $id, cholesterolPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '52a655b4b94d6be01975073e6a606936';

module.exports = node;
