/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GlucoseDevicesFilterInput = {|
  fields?: ?GlucoseDevicesFieldsInput,
  include?: ?$ReadOnlyArray<?GlucoseDevicesIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type GlucoseDevicesFieldsInput = {|
  clock?: ?boolean,
  date?: ?boolean,
  glucose?: ?boolean,
  id?: ?boolean,
  userId?: ?boolean,
|};
export type GlucoseDevicesIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?GlucoseDevicesScopeFilterInput,
|};
export type GlucoseDevicesScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorGraphGlucoseDeviceQueryVariables = {|
  filter?: ?GlucoseDevicesFilterInput
|};
export type HealthMarkerMonitorGraphGlucoseDeviceQueryResponse = {|
  +glucoseDevices: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +glucose: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphGlucoseDeviceQuery = {|
  variables: HealthMarkerMonitorGraphGlucoseDeviceQueryVariables,
  response: HealthMarkerMonitorGraphGlucoseDeviceQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphGlucoseDeviceQuery(
  $filter: GlucoseDevicesFilterInput
) {
  glucoseDevices(glucoseDevicesFilter: $filter) {
    _id: id
    glucose
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
        "name": "glucoseDevicesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "GlucoseDevicesWithRelations",
    "kind": "LinkedField",
    "name": "glucoseDevices",
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
        "name": "glucose",
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
    "name": "HealthMarkerMonitorGraphGlucoseDeviceQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphGlucoseDeviceQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7bb082972da976604103d5219c5bcf1b",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphGlucoseDeviceQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphGlucoseDeviceQuery(\n  $filter: GlucoseDevicesFilterInput\n) {\n  glucoseDevices(glucoseDevicesFilter: $filter) {\n    _id: id\n    glucose\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f5588dd65a6f03a32fa1932ff79d7474';

module.exports = node;
