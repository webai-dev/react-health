/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DiabetesFilterInput = {|
  fields?: ?DiabetesFieldsInput,
  include?: ?$ReadOnlyArray<?DiabetesIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DiabetesFieldsInput = {|
  date?: ?boolean,
  diabetesStatus?: ?boolean,
  id?: ?boolean,
  userId?: ?boolean,
|};
export type DiabetesIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?DiabetesScopeFilterInput,
|};
export type DiabetesScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DiabetesTableQueryVariables = {|
  filter: DiabetesFilterInput,
  totalCountCondition?: ?any,
|};
export type DiabetesTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +diabetesStatus: number,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type DiabetesTableQuery = {|
  variables: DiabetesTableQueryVariables,
  response: DiabetesTableQueryResponse,
|};
*/


/*
query DiabetesTableQuery(
  $filter: DiabetesFilterInput!
  $totalCountCondition: JSON
) {
  items: diabetes(diabetesFilter: $filter) {
    _id: id
    date
    diabetesStatus
  }
  totalCount: diabetesCount(where: $totalCountCondition) {
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
        "name": "diabetesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "DiabetesWithRelations",
    "kind": "LinkedField",
    "name": "diabetes",
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
        "name": "diabetesStatus",
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
    "name": "diabetesCount",
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
    "name": "DiabetesTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DiabetesTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9261f730a357a75d6cc7d0bff8c3cc6b",
    "id": null,
    "metadata": {},
    "name": "DiabetesTableQuery",
    "operationKind": "query",
    "text": "query DiabetesTableQuery(\n  $filter: DiabetesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: diabetes(diabetesFilter: $filter) {\n    _id: id\n    date\n    diabetesStatus\n  }\n  totalCount: diabetesCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1310574bb800b369b84f24be1988525';

module.exports = node;
