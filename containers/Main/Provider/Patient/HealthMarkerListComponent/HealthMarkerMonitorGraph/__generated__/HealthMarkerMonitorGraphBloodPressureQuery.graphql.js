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
export type HealthMarkerMonitorGraphBloodPressureQueryVariables = {|
  filter?: ?BloodPressuresFilterInput
|};
export type HealthMarkerMonitorGraphBloodPressureQueryResponse = {|
  +bloodPressures: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +systolic: ?number,
    +diastolic: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphBloodPressureQuery = {|
  variables: HealthMarkerMonitorGraphBloodPressureQueryVariables,
  response: HealthMarkerMonitorGraphBloodPressureQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphBloodPressureQuery(
  $filter: BloodPressuresFilterInput
) {
  bloodPressures(bloodPressuresFilter: $filter) {
    _id: id
    systolic
    diastolic
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HealthMarkerMonitorGraphBloodPressureQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphBloodPressureQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1f663f75ab99c1865e6fd124a4c43cf3",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphBloodPressureQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphBloodPressureQuery(\n  $filter: BloodPressuresFilterInput\n) {\n  bloodPressures(bloodPressuresFilter: $filter) {\n    _id: id\n    systolic\n    diastolic\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c27f1ead6685faf587c7ba069a98651b';

module.exports = node;
