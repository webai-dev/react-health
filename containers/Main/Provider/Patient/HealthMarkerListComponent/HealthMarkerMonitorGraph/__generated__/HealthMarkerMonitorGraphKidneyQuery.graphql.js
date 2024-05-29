/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type KidneysFilterInput = {|
  fields?: ?KidneyFieldsInput,
  include?: ?$ReadOnlyArray<?KidneyIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type KidneyFieldsInput = {|
  creatinine?: ?boolean,
  date?: ?boolean,
  egfr?: ?boolean,
  id?: ?boolean,
  ualbkrea?: ?boolean,
  userId?: ?boolean,
|};
export type KidneyIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?KidneyScopeFilterInput,
|};
export type KidneyScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorGraphKidneyQueryVariables = {|
  filter?: ?KidneysFilterInput
|};
export type HealthMarkerMonitorGraphKidneyQueryResponse = {|
  +kidneys: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +ualbkrea: ?number,
    +creatinine: ?number,
    +egfr: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphKidneyQuery = {|
  variables: HealthMarkerMonitorGraphKidneyQueryVariables,
  response: HealthMarkerMonitorGraphKidneyQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphKidneyQuery(
  $filter: KidneysFilterInput
) {
  kidneys(kidneysFilter: $filter) {
    _id: id
    ualbkrea
    creatinine
    egfr
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
        "name": "kidneysFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "KidneyWithRelations",
    "kind": "LinkedField",
    "name": "kidneys",
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
        "name": "ualbkrea",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "creatinine",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "egfr",
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
    "name": "HealthMarkerMonitorGraphKidneyQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphKidneyQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "39ddc80b8b5844fea65ed32310d5f80a",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphKidneyQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphKidneyQuery(\n  $filter: KidneysFilterInput\n) {\n  kidneys(kidneysFilter: $filter) {\n    _id: id\n    ualbkrea\n    creatinine\n    egfr\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f5f57b529cd25c22085e9dfb9e7b1e5';

module.exports = node;
