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
export type CalorieTableQueryVariables = {|
  filter: CaloriesFilterInput,
  totalCountCondition?: ?any,
|};
export type CalorieTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +burned: ?number,
    +consumed: ?number,
    +carbohydrates: ?number,
    +protein: ?number,
    +fat: ?number,
    +waterConsumption: ?number,
    +date: string,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type CalorieTableQuery = {|
  variables: CalorieTableQueryVariables,
  response: CalorieTableQueryResponse,
|};
*/


/*
query CalorieTableQuery(
  $filter: CaloriesFilterInput!
  $totalCountCondition: JSON
) {
  items: calories(caloriesFilter: $filter) {
    _id: id
    burned
    consumed
    carbohydrates
    protein
    fat
    waterConsumption
    date
  }
  totalCount: caloriesCount(where: $totalCountCondition) {
    count
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "totalCountCondition"
  }
],
v1 = [
  {
    "alias": "items",
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
        "name": "protein",
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
  },
  {
    "alias": "totalCount",
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "totalCountCondition"
      }
    ],
    "concreteType": "LoopbackCount",
    "kind": "LinkedField",
    "name": "caloriesCount",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
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
    "name": "CalorieTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CalorieTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "02793974e63ceebd274947e46c73d24f",
    "id": null,
    "metadata": {},
    "name": "CalorieTableQuery",
    "operationKind": "query",
    "text": "query CalorieTableQuery(\n  $filter: CaloriesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: calories(caloriesFilter: $filter) {\n    _id: id\n    burned\n    consumed\n    carbohydrates\n    protein\n    fat\n    waterConsumption\n    date\n  }\n  totalCount: caloriesCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a59e16b9474752614b93f5f296716bc';

module.exports = node;
