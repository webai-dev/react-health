/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteExerciseMutationVariables = {|
  id: number
|};
export type DeleteExerciseMutationResponse = {|
  +deleteExercise: ?{|
    +_id: ?number
  |}
|};
export type DeleteExerciseMutation = {|
  variables: DeleteExerciseMutationVariables,
  response: DeleteExerciseMutationResponse,
|};
*/


/*
mutation DeleteExerciseMutation(
  $id: Float!
) {
  deleteExercise(id: $id) {
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
    "concreteType": "Exercise2",
    "kind": "LinkedField",
    "name": "deleteExercise",
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
    "name": "DeleteExerciseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteExerciseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ccd4f8721bb22f352cb3d7a154f3a0af",
    "id": null,
    "metadata": {},
    "name": "DeleteExerciseMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteExerciseMutation(\n  $id: Float!\n) {\n  deleteExercise(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3d63891329169aa3e7587870f1533237';

module.exports = node;
