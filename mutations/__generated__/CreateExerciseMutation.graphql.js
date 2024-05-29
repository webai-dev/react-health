/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewExerciseInput = {|
  date: string,
  intensiveExercise?: ?number,
  lightExercise?: ?number,
  moderateExercise?: ?number,
  restingHeartRate?: ?number,
  source?: ?string,
  standing?: ?number,
  steps?: ?number,
  userId?: ?number,
|};
export type CreateExerciseMutationVariables = {|
  input: NewExerciseInput
|};
export type CreateExerciseMutationResponse = {|
  +createExercise: ?{|
    +_id: ?number
  |}
|};
export type CreateExerciseMutation = {|
  variables: CreateExerciseMutationVariables,
  response: CreateExerciseMutationResponse,
|};
*/


/*
mutation CreateExerciseMutation(
  $input: NewExerciseInput!
) {
  createExercise(newExerciseInput: $input) {
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
        "name": "newExerciseInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Exercise",
    "kind": "LinkedField",
    "name": "createExercise",
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
    "name": "CreateExerciseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateExerciseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bfec4ad339173b8c7f858f3984aa713b",
    "id": null,
    "metadata": {},
    "name": "CreateExerciseMutation",
    "operationKind": "mutation",
    "text": "mutation CreateExerciseMutation(\n  $input: NewExerciseInput!\n) {\n  createExercise(newExerciseInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5eabb050e6ffbcd901d59052f16f2f45';

module.exports = node;
