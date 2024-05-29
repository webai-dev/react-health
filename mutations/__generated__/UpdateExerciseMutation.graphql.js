/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ExercisePartialInput = {|
  date?: ?string,
  id?: ?number,
  intensiveExercise?: ?number,
  lightExercise?: ?number,
  moderateExercise?: ?number,
  restingHeartRate?: ?number,
  source?: ?string,
  standing?: ?number,
  steps?: ?number,
  userId?: ?number,
|};
export type UpdateExerciseMutationVariables = {|
  id: number,
  input: ExercisePartialInput,
|};
export type UpdateExerciseMutationResponse = {|
  +updateExercise: ?{|
    +_id: ?number
  |}
|};
export type UpdateExerciseMutation = {|
  variables: UpdateExerciseMutationVariables,
  response: UpdateExerciseMutationResponse,
|};
*/


/*
mutation UpdateExerciseMutation(
  $id: Float!
  $input: ExercisePartialInput!
) {
  updateExercise(id: $id, exercisePartialInput: $input) {
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
        "name": "exercisePartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ExerciseWithRelations",
    "kind": "LinkedField",
    "name": "updateExercise",
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
    "name": "UpdateExerciseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateExerciseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9925babec30dca14340181090c398856",
    "id": null,
    "metadata": {},
    "name": "UpdateExerciseMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateExerciseMutation(\n  $id: Float!\n  $input: ExercisePartialInput!\n) {\n  updateExercise(id: $id, exercisePartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e2f888059b4a56a12a611feb2d306ef5';

module.exports = node;
