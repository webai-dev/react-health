/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AnthropometriesFilterInput = {|
  fields?: ?AnthropometryFieldsInput,
  include?: ?$ReadOnlyArray<?AnthropometryIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type AnthropometryFieldsInput = {|
  arms?: ?boolean,
  bmi?: ?boolean,
  chest?: ?boolean,
  date?: ?boolean,
  height?: ?boolean,
  id?: ?boolean,
  userId?: ?boolean,
  waist?: ?boolean,
  weight?: ?boolean,
|};
export type AnthropometryIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?AnthropometryScopeFilterInput,
|};
export type AnthropometryScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorGraphAnthropometryQueryVariables = {|
  filter?: ?AnthropometriesFilterInput
|};
export type HealthMarkerMonitorGraphAnthropometryQueryResponse = {|
  +anthropometries: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +weight: ?number,
    +waist: ?number,
    +bmi: ?number,
    +arms: ?number,
    +chest: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphAnthropometryQuery = {|
  variables: HealthMarkerMonitorGraphAnthropometryQueryVariables,
  response: HealthMarkerMonitorGraphAnthropometryQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphAnthropometryQuery(
  $filter: AnthropometriesFilterInput
) {
  anthropometries(anthropometriesFilter: $filter) {
    _id: id
    weight
    waist
    bmi
    arms
    chest
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
        "name": "anthropometriesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "AnthropometryWithRelations",
    "kind": "LinkedField",
    "name": "anthropometries",
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
        "name": "weight",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "waist",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bmi",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "arms",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "chest",
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
    "name": "HealthMarkerMonitorGraphAnthropometryQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphAnthropometryQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "02fa55f1571ac562bd0a3f4ce59c11ff",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphAnthropometryQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphAnthropometryQuery(\n  $filter: AnthropometriesFilterInput\n) {\n  anthropometries(anthropometriesFilter: $filter) {\n    _id: id\n    weight\n    waist\n    bmi\n    arms\n    chest\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ec8131b20e1c3f8f9e158a4826deb26';

module.exports = node;
