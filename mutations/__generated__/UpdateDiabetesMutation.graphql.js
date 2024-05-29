/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DiabetesPartialInput = {|
  date?: ?string,
  diabetesStatus?: ?number,
  id?: ?number,
  userId?: ?number,
|};
export type UpdateDiabetesMutationVariables = {|
  id: number,
  input: DiabetesPartialInput,
|};
export type UpdateDiabetesMutationResponse = {|
  +updateDiabetes: ?{|
    +_id: ?number
  |}
|};
export type UpdateDiabetesMutation = {|
  variables: UpdateDiabetesMutationVariables,
  response: UpdateDiabetesMutationResponse,
|};
*/


/*
mutation UpdateDiabetesMutation(
  $id: Float!
  $input: DiabetesPartialInput!
) {
  updateDiabetes(id: $id, diabetesPartialInput: $input) {
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
        "name": "diabetesPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "DiabetesWithRelations",
    "kind": "LinkedField",
    "name": "updateDiabetes",
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
    "name": "UpdateDiabetesMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateDiabetesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a2d321536bd487858cf13d6424e17419",
    "id": null,
    "metadata": {},
    "name": "UpdateDiabetesMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateDiabetesMutation(\n  $id: Float!\n  $input: DiabetesPartialInput!\n) {\n  updateDiabetes(id: $id, diabetesPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dcd8c665d6fcd91d287ae8a36d12f54c';

module.exports = node;
