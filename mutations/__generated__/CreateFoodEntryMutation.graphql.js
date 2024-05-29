/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewFoodEntryInput = {|
  carbs?: ?number,
  carbsKcal?: ?number,
  date: string,
  energy?: ?number,
  entered: number,
  fat?: ?number,
  fatKcal?: ?number,
  foodId?: ?number,
  foodVariantId?: ?number,
  protein?: ?number,
  proteinKcal?: ?number,
  serving?: ?string,
  sum: number,
  time: string,
  type: string,
  userId?: ?number,
|};
export type CreateFoodEntryMutationVariables = {|
  input: NewFoodEntryInput
|};
export type CreateFoodEntryMutationResponse = {|
  +createFoodEntry: ?{|
    +_id: ?number
  |}
|};
export type CreateFoodEntryMutation = {|
  variables: CreateFoodEntryMutationVariables,
  response: CreateFoodEntryMutationResponse,
|};
*/


/*
mutation CreateFoodEntryMutation(
  $input: NewFoodEntryInput!
) {
  createFoodEntry(newFoodEntryInput: $input) {
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
        "name": "newFoodEntryInput",
        "variableName": "input"
      }
    ],
    "concreteType": "FoodEntryWithRelations",
    "kind": "LinkedField",
    "name": "createFoodEntry",
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
    "name": "CreateFoodEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateFoodEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "af0b3213f9b703119d7e5df7872d0037",
    "id": null,
    "metadata": {},
    "name": "CreateFoodEntryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateFoodEntryMutation(\n  $input: NewFoodEntryInput!\n) {\n  createFoodEntry(newFoodEntryInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eaf501651f6912a57f1dbbbe1ea53f6d';

module.exports = node;
