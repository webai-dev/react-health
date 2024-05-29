/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HealthMarkerExtrasFilterInput = {|
  fields?: ?HealthMarkerExtraFieldsInput,
  include?: ?$ReadOnlyArray<?HealthMarkerExtraIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerExtraFieldsInput = {|
  armsChest?: ?boolean,
  carbohydrates?: ?boolean,
  date?: ?boolean,
  fastActing?: ?boolean,
  fat?: ?boolean,
  id?: ?boolean,
  longActing?: ?boolean,
  protein?: ?boolean,
  sleepSmartWatch?: ?boolean,
  stressSmartWatch?: ?boolean,
  training?: ?boolean,
  userId?: ?boolean,
  waterConsumption?: ?boolean,
|};
export type HealthMarkerExtraIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?HealthMarkerExtraScopeFilterInput,
|};
export type HealthMarkerExtraScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorGraphHealthMarkerExtraQueryVariables = {|
  filter?: ?HealthMarkerExtrasFilterInput
|};
export type HealthMarkerMonitorGraphHealthMarkerExtraQueryResponse = {|
  +healthMarkerExtras: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +carbohydrates: ?number,
    +protein: ?number,
    +fat: ?number,
    +training: ?number,
    +waterConsumption: ?number,
    +longActing: ?number,
    +fastActing: ?number,
    +armsChest: ?number,
    +stressSmartWatch: ?number,
    +sleepSmartWatch: ?number,
  |}>
|};
export type HealthMarkerMonitorGraphHealthMarkerExtraQuery = {|
  variables: HealthMarkerMonitorGraphHealthMarkerExtraQueryVariables,
  response: HealthMarkerMonitorGraphHealthMarkerExtraQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphHealthMarkerExtraQuery(
  $filter: HealthMarkerExtrasFilterInput
) {
  healthMarkerExtras(healthMarkerExtrasFilter: $filter) {
    _id: id
    date
    carbohydrates
    protein
    fat
    training
    waterConsumption
    longActing
    fastActing
    armsChest
    stressSmartWatch
    sleepSmartWatch
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
        "name": "healthMarkerExtrasFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "HealthMarkerExtraWithRelations",
    "kind": "LinkedField",
    "name": "healthMarkerExtras",
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
        "name": "training",
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
        "name": "longActing",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fastActing",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "armsChest",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "stressSmartWatch",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sleepSmartWatch",
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
    "name": "HealthMarkerMonitorGraphHealthMarkerExtraQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphHealthMarkerExtraQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1c4476d5b95f9a4239ac111d64cf437f",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphHealthMarkerExtraQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphHealthMarkerExtraQuery(\n  $filter: HealthMarkerExtrasFilterInput\n) {\n  healthMarkerExtras(healthMarkerExtrasFilter: $filter) {\n    _id: id\n    date\n    carbohydrates\n    protein\n    fat\n    training\n    waterConsumption\n    longActing\n    fastActing\n    armsChest\n    stressSmartWatch\n    sleepSmartWatch\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29a3cf3d50b954c757b255b5bb82b828';

module.exports = node;
