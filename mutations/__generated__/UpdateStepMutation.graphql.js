/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StepPartialInput = {|
  date?: ?string,
  id?: ?number,
  restingHeartRate?: ?number,
  sleepSmartWatch?: ?number,
  steps?: ?number,
  stressSmartWatch?: ?number,
  training?: ?number,
  userId?: ?number,
|};
export type UpdateStepMutationVariables = {|
  id: number,
  input: StepPartialInput,
|};
export type UpdateStepMutationResponse = {|
  +updateStep: ?{|
    +_id: ?number
  |}
|};
export type UpdateStepMutation = {|
  variables: UpdateStepMutationVariables,
  response: UpdateStepMutationResponse,
|};
*/


/*
mutation UpdateStepMutation(
  $id: Float!
  $input: StepPartialInput!
) {
  updateStep(id: $id, stepPartialInput: $input) {
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
        "name": "stepPartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "StepWithRelations",
    "kind": "LinkedField",
    "name": "updateStep",
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
    "name": "UpdateStepMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateStepMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a94e090efed37b7dea2ae271ebabb82a",
    "id": null,
    "metadata": {},
    "name": "UpdateStepMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateStepMutation(\n  $id: Float!\n  $input: StepPartialInput!\n) {\n  updateStep(id: $id, stepPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9e34506378c6ab37097c8d4122b34ba';

module.exports = node;
