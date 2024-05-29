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
export type GlucoseDeviceTableQueryVariables = {|
  filter: GlucoseDevicesFilterInput,
  totalCountCondition?: ?any,
|};
export type GlucoseDeviceTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +glucose: ?number,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type GlucoseDeviceTableQuery = {|
  variables: GlucoseDeviceTableQueryVariables,
  response: GlucoseDeviceTableQueryResponse,
|};
*/


/*
query GlucoseDeviceTableQuery(
  $filter: GlucoseDevicesFilterInput!
  $totalCountCondition: JSON
) {
  items: glucoseDevices(glucoseDevicesFilter: $filter) {
    _id: id
    date
    glucose
  }
  totalCount: glucoseDevicesCount(where: $totalCountCondition) {
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
        "name": "date",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "glucose",
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
    "name": "glucoseDevicesCount",
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
    "name": "GlucoseDeviceTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GlucoseDeviceTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6da1efa4797d8746937f9188c0e68cdc",
    "id": null,
    "metadata": {},
    "name": "GlucoseDeviceTableQuery",
    "operationKind": "query",
    "text": "query GlucoseDeviceTableQuery(\n  $filter: GlucoseDevicesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: glucoseDevices(glucoseDevicesFilter: $filter) {\n    _id: id\n    date\n    glucose\n  }\n  totalCount: glucoseDevicesCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f1b98efa55c9ec1dc8859f33d3ed9765';

module.exports = node;
