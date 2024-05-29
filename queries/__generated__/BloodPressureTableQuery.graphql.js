/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BloodPressuresFilterInput = {|
  fields?: ?BloodPressureFieldsInput,
  include?: ?$ReadOnlyArray<?BloodPressureIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type BloodPressureFieldsInput = {|
  date?: ?boolean,
  diastolic?: ?boolean,
  id?: ?boolean,
  systolic?: ?boolean,
  userId?: ?boolean,
|};
export type BloodPressureIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?BloodPressureScopeFilterInput,
|};
export type BloodPressureScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type BloodPressureTableQueryVariables = {|
  filter: BloodPressuresFilterInput,
  totalCountCondition?: ?any,
|};
export type BloodPressureTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +systolic: ?number,
    +diastolic: ?number,
    +date: string,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type BloodPressureTableQuery = {|
  variables: BloodPressureTableQueryVariables,
  response: BloodPressureTableQueryResponse,
|};
*/


/*
query BloodPressureTableQuery(
  $filter: BloodPressuresFilterInput!
  $totalCountCondition: JSON
) {
  items: bloodPressures(bloodPressuresFilter: $filter) {
    _id: id
    systolic
    diastolic
    date
  }
  totalCount: bloodPressuresCount(where: $totalCountCondition) {
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
        "name": "bloodPressuresFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "BloodPressureWithRelations",
    "kind": "LinkedField",
    "name": "bloodPressures",
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
        "name": "systolic",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "diastolic",
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
    "name": "bloodPressuresCount",
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
    "name": "BloodPressureTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BloodPressureTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a1eecf8e7914fa8b0a1e73765c8658b0",
    "id": null,
    "metadata": {},
    "name": "BloodPressureTableQuery",
    "operationKind": "query",
    "text": "query BloodPressureTableQuery(\n  $filter: BloodPressuresFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: bloodPressures(bloodPressuresFilter: $filter) {\n    _id: id\n    systolic\n    diastolic\n    date\n  }\n  totalCount: bloodPressuresCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd487f908c652f670324b511bbe39d802';

module.exports = node;
