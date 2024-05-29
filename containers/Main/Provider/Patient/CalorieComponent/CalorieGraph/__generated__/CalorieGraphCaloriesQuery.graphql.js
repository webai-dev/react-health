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
export type CalorieGraphCaloriesQueryVariables = {|
  filter?: ?CaloriesFilterInput
|};
export type CalorieGraphCaloriesQueryResponse = {|
  +calories: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +burned: ?number,
    +consumed: ?number,
    +date: string,
  |}>
|};
export type CalorieGraphCaloriesQuery = {|
  variables: CalorieGraphCaloriesQueryVariables,
  response: CalorieGraphCaloriesQueryResponse,
|};
*/


/*
query CalorieGraphCaloriesQuery(
  $filter: CaloriesFilterInput
) {
  calories(caloriesFilter: $filter) {
    _id: id
    burned
    consumed
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
    "name": "CalorieGraphCaloriesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CalorieGraphCaloriesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "384103c0d2838c17a089119dcad00f20",
    "id": null,
    "metadata": {},
    "name": "CalorieGraphCaloriesQuery",
    "operationKind": "query",
    "text": "query CalorieGraphCaloriesQuery(\n  $filter: CaloriesFilterInput\n) {\n  calories(caloriesFilter: $filter) {\n    _id: id\n    burned\n    consumed\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '743277b483d184a4ce10fd6625dda226';

module.exports = node;
