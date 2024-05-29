/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserBaselinePartialInput = {|
  age?: ?number,
  aimGlucoseControl?: ?boolean,
  aimGoalWeight?: ?number,
  aimRiskControl?: ?boolean,
  aimWeeksWeight?: ?number,
  aimWeightLoss?: ?boolean,
  height?: ?number,
  id?: ?number,
  onboardingCompleted?: ?boolean,
  sex?: ?string,
  useCgm?: ?boolean,
  useCgmType?: ?string,
  usePump?: ?boolean,
  usePumpType?: ?string,
  useSmartWatch?: ?boolean,
  useSmartWatchType?: ?string,
  useStrips?: ?boolean,
  userId?: ?number,
|};
export type UpdateUserBaselineMutationVariables = {|
  id: number,
  input: UserBaselinePartialInput,
|};
export type UpdateUserBaselineMutationResponse = {|
  +updateUserBaseline: ?{|
    +id: ?number
  |}
|};
export type UpdateUserBaselineMutation = {|
  variables: UpdateUserBaselineMutationVariables,
  response: UpdateUserBaselineMutationResponse,
|};
*/


/*
mutation UpdateUserBaselineMutation(
  $id: Float!
  $input: UserBaselinePartialInput!
) {
  updateUserBaseline(id: $id, userBaselinePartialInput: $input) {
    id
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
        "name": "userBaselinePartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "UserBaselineWithRelations",
    "kind": "LinkedField",
    "name": "updateUserBaseline",
    "plural": false,
    "selections": [
      {
        "alias": null,
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
    "name": "UpdateUserBaselineMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateUserBaselineMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "38f9e2e8572227ce51404837a362d601",
    "id": null,
    "metadata": {},
    "name": "UpdateUserBaselineMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserBaselineMutation(\n  $id: Float!\n  $input: UserBaselinePartialInput!\n) {\n  updateUserBaseline(id: $id, userBaselinePartialInput: $input) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c796afdbe8caab7e31a20075b510f29b';

module.exports = node;
