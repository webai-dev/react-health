/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CaloriesPartialInput = {|
  burned?: ?number,
  carbohydrates?: ?number,
  consumed?: ?number,
  date?: ?string,
  fat?: ?number,
  id?: ?number,
  protein?: ?number,
  userId?: ?number,
  waterConsumption?: ?number,
|};
export type UpdateCalorieMutationVariables = {|
  id: number,
  input: CaloriesPartialInput,
|};
export type UpdateCalorieMutationResponse = {|
  +updateCalorie: ?{|
    +_id: ?number
  |}
|};
export type UpdateCalorieMutation = {|
  variables: UpdateCalorieMutationVariables,
  response: UpdateCalorieMutationResponse,
|};
*/


/*
mutation UpdateCalorieMutation(
  $id: Float!
  $input: CaloriesPartialInput!
) {
  updateCalorie(id: $id, caloriesPartialInput: $input) {
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
        "name": "caloriesPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "CaloriesWithRelations",
    "kind": "LinkedField",
    "name": "updateCalorie",
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
    "name": "UpdateCalorieMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateCalorieMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "061e39ecac6854d40d7b5d791a981f55",
    "id": null,
    "metadata": {},
    "name": "UpdateCalorieMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCalorieMutation(\n  $id: Float!\n  $input: CaloriesPartialInput!\n) {\n  updateCalorie(id: $id, caloriesPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd62cc74ce16951f92cbdcd19545ae21';

module.exports = node;
