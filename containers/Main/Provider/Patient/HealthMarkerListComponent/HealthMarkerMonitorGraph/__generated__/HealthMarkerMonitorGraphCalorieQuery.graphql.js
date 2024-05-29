/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CaloriesFilterInput = {|
  fields?: ?CaloriesFieldsInput,
  include?: ?$ReadOnlyArray<?CaloriesIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type CaloriesFieldsInput = {|
  burned?: ?boolean,
  carbohydrates?: ?boolean,
  consumed?: ?boolean,
  date?: ?boolean,
  fat?: ?boolean,
  id?: ?boolean,
  protein?: ?boolean,
  userId?: ?boolean,
  waterConsumption?: ?boolean,
|};
export type CaloriesIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?CaloriesScopeFilterInput,
|};
export type CaloriesScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorGraphCalorieQueryVariables = {|
  filter?: ?CaloriesFilterInput
|};
export type HealthMarkerMonitorGraphCalorieQueryResponse = {|
  +calories: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +burned: ?number,
    +consumed: ?number,
    +carbohydrates: ?number,
    +fat: ?number,
    +protein: ?number,
    +waterConsumption: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphCalorieQuery = {|
  variables: HealthMarkerMonitorGraphCalorieQueryVariables,
  response: HealthMarkerMonitorGraphCalorieQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphCalorieQuery(
  $filter: CaloriesFilterInput
) {
  calories(caloriesFilter: $filter) {
    _id: id
    burned
    consumed
    carbohydrates
    fat
    protein
    waterConsumption
    date
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "caloriesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "CaloriesWithRelations",
    "kind": "LinkedField",
    "name": "calories",
    "plural": true,
    "selections": [
      {
        "alias": "_id",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "burned",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "consumed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "carbohydrates",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fat",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "protein",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "waterConsumption",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
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
    "name": "HealthMarkerMonitorGraphCalorieQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphCalorieQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b70289fcbb2b06061c9f7277197ba38c",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphCalorieQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphCalorieQuery(\n  $filter: CaloriesFilterInput\n) {\n  calories(caloriesFilter: $filter) {\n    _id: id\n    burned\n    consumed\n    carbohydrates\n    fat\n    protein\n    waterConsumption\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '11681e2041d9f0bd05d7058d5589340f';

module.exports = node;
