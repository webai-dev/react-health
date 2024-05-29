/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InsulinInjectionsFilterInput = {|
  fields?: ?InsulinInjectionsFieldsInput,
  include?: ?$ReadOnlyArray<?InsulinInjectionsIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type InsulinInjectionsFieldsInput = {|
  clock?: ?boolean,
  date?: ?boolean,
  dose?: ?boolean,
  fastActing?: ?boolean,
  id?: ?boolean,
  longActing?: ?boolean,
  userId?: ?boolean,
|};
export type InsulinInjectionsIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?InsulinInjectionsScopeFilterInput,
|};
export type InsulinInjectionsScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorGraphInsulinInjectionQueryVariables = {|
  filter?: ?InsulinInjectionsFilterInput
|};
export type HealthMarkerMonitorGraphInsulinInjectionQueryResponse = {|
  +insulinInjections: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +dose: ?number,
    +fastActing: ?number,
    +longActing: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphInsulinInjectionQuery = {|
  variables: HealthMarkerMonitorGraphInsulinInjectionQueryVariables,
  response: HealthMarkerMonitorGraphInsulinInjectionQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphInsulinInjectionQuery(
  $filter: InsulinInjectionsFilterInput
) {
  insulinInjections(insulinInjectionsFilter: $filter) {
    _id: id
    dose
    fastActing
    longActing
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
        "name": "insulinInjectionsFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "InsulinInjectionsWithRelations",
    "kind": "LinkedField",
    "name": "insulinInjections",
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
        "name": "dose",
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
        "name": "longActing",
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
    "name": "HealthMarkerMonitorGraphInsulinInjectionQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphInsulinInjectionQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9d1cc23f8c65e9b6b1227dc5359f536d",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphInsulinInjectionQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphInsulinInjectionQuery(\n  $filter: InsulinInjectionsFilterInput\n) {\n  insulinInjections(insulinInjectionsFilter: $filter) {\n    _id: id\n    dose\n    fastActing\n    longActing\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa6c11cab9f289e82b80e9d647f11e34';

module.exports = node;
