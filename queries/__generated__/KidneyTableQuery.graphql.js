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
export type KidneyTableQueryVariables = {|
  filter: KidneysFilterInput,
  totalCountCondition?: ?any,
|};
export type KidneyTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +ualbkrea: ?number,
    +creatinine: ?number,
    +egfr: ?number,
    +date: string,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type KidneyTableQuery = {|
  variables: KidneyTableQueryVariables,
  response: KidneyTableQueryResponse,
|};
*/


/*
query KidneyTableQuery(
  $filter: KidneysFilterInput!
  $totalCountCondition: JSON
) {
  items: kidneys(kidneysFilter: $filter) {
    _id: id
    ualbkrea
    creatinine
    egfr
    date
  }
  totalCount: kidneysCount(where: $totalCountCondition) {
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
    "name": "kidneysCount",
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
    "name": "KidneyTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KidneyTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9afe8ac2aeb26754cc24cfdd077f4218",
    "id": null,
    "metadata": {},
    "name": "KidneyTableQuery",
    "operationKind": "query",
    "text": "query KidneyTableQuery(\n  $filter: KidneysFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: kidneys(kidneysFilter: $filter) {\n    _id: id\n    ualbkrea\n    creatinine\n    egfr\n    date\n  }\n  totalCount: kidneysCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd4183e3222ae62a3ebc713f72114d5dc';

module.exports = node;
