/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GlucoseManualPartialInput = {|
  clock?: ?string,
  date?: ?string,
  glucoseABreakfast?: ?number,
  glucoseADinner?: ?number,
  glucoseALunch?: ?number,
  glucoseBBreakfast?: ?number,
  glucoseBDinner?: ?number,
  glucoseBLunch?: ?number,
  glucoseFasting?: ?number,
  glucoseRandom?: ?number,
  hba1c?: ?number,
  id?: ?number,
  userId?: ?number,
|};
export type UpdateGlucoseManualMutationVariables = {|
  id: number,
  input: GlucoseManualPartialInput,
|};
export type UpdateGlucoseManualMutationResponse = {|
  +updateGlucoseManual: ?{|
    +_id: ?number
  |}
|};
export type UpdateGlucoseManualMutation = {|
  variables: UpdateGlucoseManualMutationVariables,
  response: UpdateGlucoseManualMutationResponse,
|};
*/


/*
mutation UpdateGlucoseManualMutation(
  $id: Float!
  $input: GlucoseManualPartialInput!
) {
  updateGlucoseManual(id: $id, glucoseManualPartialInput: $input) {
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
        "name": "glucoseManualPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "GlucoseManualWithRelations",
    "kind": "LinkedField",
    "name": "updateGlucoseManual",
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
    "name": "UpdateGlucoseManualMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateGlucoseManualMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9a0057ab28bb3bf5f726fcec85d6bf80",
    "id": null,
    "metadata": {},
    "name": "UpdateGlucoseManualMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateGlucoseManualMutation(\n  $id: Float!\n  $input: GlucoseManualPartialInput!\n) {\n  updateGlucoseManual(id: $id, glucoseManualPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9bda392fb3ea62d64dae597d2f3fc705';

module.exports = node;
