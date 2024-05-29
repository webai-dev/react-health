/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FoodEntryPartialInput = {|
  carbs?: ?number,
  carbsKcal?: ?number,
  date?: ?string,
  energy?: ?number,
  entered?: ?number,
  fat?: ?number,
  fatKcal?: ?number,
  foodId?: ?number,
  foodVariantId?: ?number,
  id?: ?number,
  protein?: ?number,
  proteinKcal?: ?number,
  serving?: ?string,
  sum?: ?number,
  time?: ?string,
  type?: ?string,
  userId?: ?number,
|};
export type UpdateFoodEntryMutationVariables = {|
  id: number,
  input: FoodEntryPartialInput,
|};
export type UpdateFoodEntryMutationResponse = {|
  +updateFoodEntry: ?{|
    +_id: ?number
  |}
|};
export type UpdateFoodEntryMutation = {|
  variables: UpdateFoodEntryMutationVariables,
  response: UpdateFoodEntryMutationResponse,
|};
*/


/*
mutation UpdateFoodEntryMutation(
  $id: Float!
  $input: FoodEntryPartialInput!
) {
  updateFoodEntry(id: $id, foodEntryPartialInput: $input) {
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
        "name": "foodEntryPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "FoodEntryWithRelations",
    "kind": "LinkedField",
    "name": "updateFoodEntry",
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
    "name": "UpdateFoodEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateFoodEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4a119f19aecda323d4cddcfb936f7c11",
    "id": null,
    "metadata": {},
    "name": "UpdateFoodEntryMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateFoodEntryMutation(\n  $id: Float!\n  $input: FoodEntryPartialInput!\n) {\n  updateFoodEntry(id: $id, foodEntryPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '15bef789f5a92c10c9d33d62589eb336';

module.exports = node;
