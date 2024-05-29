/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FoodEntriesFilterInput = {|
  fields?: ?FoodEntryFieldsInput,
  include?: ?$ReadOnlyArray<?FoodEntryIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type FoodEntryFieldsInput = {|
  carbs?: ?boolean,
  carbsKcal?: ?boolean,
  date?: ?boolean,
  energy?: ?boolean,
  entered?: ?boolean,
  fat?: ?boolean,
  fatKcal?: ?boolean,
  foodId?: ?boolean,
  foodVariantId?: ?boolean,
  id?: ?boolean,
  protein?: ?boolean,
  proteinKcal?: ?boolean,
  serving?: ?boolean,
  sum?: ?boolean,
  time?: ?boolean,
  type?: ?boolean,
  userId?: ?boolean,
|};
export type FoodEntryIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?FoodEntryScopeFilterInput,
|};
export type FoodEntryScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type FoodEntryTableQueryVariables = {|
  filter: FoodEntriesFilterInput,
  totalCountCondition?: ?any,
|};
export type FoodEntryTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +entered: number,
    +foodId: ?number,
    +foodVariantId: ?number,
    +type: string,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
  +foods: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +label: string,
  |}>,
|};
export type FoodEntryTableQuery = {|
  variables: FoodEntryTableQueryVariables,
  response: FoodEntryTableQueryResponse,
|};
*/


/*
query FoodEntryTableQuery(
  $filter: FoodEntriesFilterInput!
  $totalCountCondition: JSON
) {
  items: foodEntries(foodEntriesFilter: $filter) {
    _id: id
    date
    entered
    foodId
    foodVariantId
    type
  }
  totalCount: foodEntriesCount(where: $totalCountCondition) {
    count
  }
  foods {
    _id: id
    label
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
v1 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": "items",
    "args": [
      {
        "kind": "Variable",
        "name": "foodEntriesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "FoodEntryWithRelations",
    "kind": "LinkedField",
    "name": "foodEntries",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "entered",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "foodId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "foodVariantId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
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
    "name": "foodEntriesCount",
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
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "FoodWithRelations",
    "kind": "LinkedField",
    "name": "foods",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
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
    "name": "FoodEntryTableQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FoodEntryTableQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0adf271965b248368406b15b9eae72ae",
    "id": null,
    "metadata": {},
    "name": "FoodEntryTableQuery",
    "operationKind": "query",
    "text": "query FoodEntryTableQuery(\n  $filter: FoodEntriesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: foodEntries(foodEntriesFilter: $filter) {\n    _id: id\n    date\n    entered\n    foodId\n    foodVariantId\n    type\n  }\n  totalCount: foodEntriesCount(where: $totalCountCondition) {\n    count\n  }\n  foods {\n    _id: id\n    label\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3e6209aa91a48b3c759ef8af2ed09998';

module.exports = node;
