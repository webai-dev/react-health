/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LifestylesFilterInput = {|
  fields?: ?LifestyleFieldsInput,
  include?: ?$ReadOnlyArray<?LifestyleIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type LifestyleFieldsInput = {|
  date?: ?boolean,
  dietType?: ?boolean,
  exerciseLevel?: ?boolean,
  id?: ?boolean,
  smoking?: ?boolean,
  userId?: ?boolean,
|};
export type LifestyleIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?LifestyleScopeFilterInput,
|};
export type LifestyleScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type LifestyleTableQueryVariables = {|
  filter: LifestylesFilterInput,
  totalCountCondition?: ?any,
|};
export type LifestyleTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +dietType: ?number,
    +exerciseLevel: ?number,
    +smoking: ?boolean,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type LifestyleTableQuery = {|
  variables: LifestyleTableQueryVariables,
  response: LifestyleTableQueryResponse,
|};
*/


/*
query LifestyleTableQuery(
  $filter: LifestylesFilterInput!
  $totalCountCondition: JSON
) {
  items: lifestyles(lifestylesFilter: $filter) {
    _id: id
    date
    dietType
    exerciseLevel
    smoking
  }
  totalCount: lifestylesCount(where: $totalCountCondition) {
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
        "name": "lifestylesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "LifestyleWithRelations",
    "kind": "LinkedField",
    "name": "lifestyles",
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
        "name": "dietType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "exerciseLevel",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "smoking",
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
    "name": "lifestylesCount",
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
    "name": "LifestyleTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LifestyleTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d06f3cba62c4e58f33fd15242fe07b41",
    "id": null,
    "metadata": {},
    "name": "LifestyleTableQuery",
    "operationKind": "query",
    "text": "query LifestyleTableQuery(\n  $filter: LifestylesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: lifestyles(lifestylesFilter: $filter) {\n    _id: id\n    date\n    dietType\n    exerciseLevel\n    smoking\n  }\n  totalCount: lifestylesCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c5b76c939888286c1912219c769979e';

module.exports = node;
