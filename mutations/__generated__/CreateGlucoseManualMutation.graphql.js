/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewGlucoseManualInput = {|
  clock?: ?string,
  date: string,
  glucoseABreakfast?: ?number,
  glucoseADinner?: ?number,
  glucoseALunch?: ?number,
  glucoseBBreakfast?: ?number,
  glucoseBDinner?: ?number,
  glucoseBLunch?: ?number,
  glucoseFasting?: ?number,
  glucoseRandom?: ?number,
  hba1c?: ?number,
  userId?: ?number,
|};
export type CreateGlucoseManualMutationVariables = {|
  input: NewGlucoseManualInput
|};
export type CreateGlucoseManualMutationResponse = {|
  +createGlucoseManual: ?{|
    +_id: ?number
  |}
|};
export type CreateGlucoseManualMutation = {|
  variables: CreateGlucoseManualMutationVariables,
  response: CreateGlucoseManualMutationResponse,
|};
*/


/*
mutation CreateGlucoseManualMutation(
  $input: NewGlucoseManualInput!
) {
  createGlucoseManual(newGlucoseManualInput: $input) {
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
        "name": "newGlucoseManualInput",
        "variableName": "input"
      }
    ],
    "concreteType": "GlucoseManual",
    "kind": "LinkedField",
    "name": "createGlucoseManual",
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
    "name": "CreateGlucoseManualMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateGlucoseManualMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f8b8a5e3e134a15f476360ef9fa0af08",
    "id": null,
    "metadata": {},
    "name": "CreateGlucoseManualMutation",
    "operationKind": "mutation",
    "text": "mutation CreateGlucoseManualMutation(\n  $input: NewGlucoseManualInput!\n) {\n  createGlucoseManual(newGlucoseManualInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b98cb22f81955732e0ed23ad22daa34b';

module.exports = node;
