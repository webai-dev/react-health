/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CholesterolsFilterInput = {|
  fields?: ?CholesterolFieldsInput,
  include?: ?$ReadOnlyArray<?CholesterolIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type CholesterolFieldsInput = {|
  date?: ?boolean,
  hdlChol?: ?boolean,
  id?: ?boolean,
  ldlChol?: ?boolean,
  totalChol?: ?boolean,
  triglycerides?: ?boolean,
  userId?: ?boolean,
|};
export type CholesterolIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?CholesterolScopeFilterInput,
|};
export type CholesterolScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type CholesterolTableQueryVariables = {|
  filter: CholesterolsFilterInput,
  totalCountCondition?: ?any,
|};
export type CholesterolTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +hdlChol: ?number,
    +ldlChol: ?number,
    +totalChol: ?number,
    +triglycerides: ?number,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type CholesterolTableQuery = {|
  variables: CholesterolTableQueryVariables,
  response: CholesterolTableQueryResponse,
|};
*/


/*
query CholesterolTableQuery(
  $filter: CholesterolsFilterInput!
  $totalCountCondition: JSON
) {
  items: cholesterols(cholesterolsFilter: $filter) {
    _id: id
    date
    hdlChol
    ldlChol
    totalChol
    triglycerides
  }
  totalCount: cholesterolsCount(where: $totalCountCondition) {
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
        "name": "cholesterolsFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "CholesterolWithRelations",
    "kind": "LinkedField",
    "name": "cholesterols",
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
        "name": "hdlChol",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ldlChol",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalChol",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "triglycerides",
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
    "name": "cholesterolsCount",
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
    "name": "CholesterolTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CholesterolTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8cfa6b439be5f1fd52e785eb0516d24b",
    "id": null,
    "metadata": {},
    "name": "CholesterolTableQuery",
    "operationKind": "query",
    "text": "query CholesterolTableQuery(\n  $filter: CholesterolsFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: cholesterols(cholesterolsFilter: $filter) {\n    _id: id\n    date\n    hdlChol\n    ldlChol\n    totalChol\n    triglycerides\n  }\n  totalCount: cholesterolsCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd47eb29d8ba61add485aa394003457ec';

module.exports = node;
