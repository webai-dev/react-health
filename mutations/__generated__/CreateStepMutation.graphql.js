/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewStepInput = {|
  date: string,
  restingHeartRate?: ?number,
  sleepSmartWatch?: ?number,
  steps?: ?number,
  stressSmartWatch?: ?number,
  training?: ?number,
  userId?: ?number,
|};
export type CreateStepMutationVariables = {|
  input: NewStepInput
|};
export type CreateStepMutationResponse = {|
  +createStep: ?{|
    +_id: ?number
  |}
|};
export type CreateStepMutation = {|
  variables: CreateStepMutationVariables,
  response: CreateStepMutationResponse,
|};
*/


/*
mutation CreateStepMutation(
  $input: NewStepInput!
) {
  createStep(newStepInput: $input) {
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
        "name": "newStepInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Step",
    "kind": "LinkedField",
    "name": "createStep",
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
    "name": "CreateStepMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateStepMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f1a7f613c03f056ebddc7a8d37799d3a",
    "id": null,
    "metadata": {},
    "name": "CreateStepMutation",
    "operationKind": "mutation",
    "text": "mutation CreateStepMutation(\n  $input: NewStepInput!\n) {\n  createStep(newStepInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7479cca25aeef3b31101e17c32a03972';

module.exports = node;
