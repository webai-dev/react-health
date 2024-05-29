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
export type AnthropometryTableQueryVariables = {|
  filter: AnthropometriesFilterInput,
  totalCountCondition?: ?any,
|};
export type AnthropometryTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +height: ?number,
    +waist: ?number,
    +weight: ?number,
    +arms: ?number,
    +chest: ?number,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type AnthropometryTableQuery = {|
  variables: AnthropometryTableQueryVariables,
  response: AnthropometryTableQueryResponse,
|};
*/


/*
query AnthropometryTableQuery(
  $filter: AnthropometriesFilterInput!
  $totalCountCondition: JSON
) {
  items: anthropometries(anthropometriesFilter: $filter) {
    _id: id
    date
    height
    waist
    weight
    arms
    chest
  }
  totalCount: anthropometriesCount(where: $totalCountCondition) {
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
        "name": "date",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "height",
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
        "name": "weight",
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
    "name": "anthropometriesCount",
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
    "name": "AnthropometryTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AnthropometryTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "885a0123bb4099a59f96138609a3ce41",
    "id": null,
    "metadata": {},
    "name": "AnthropometryTableQuery",
    "operationKind": "query",
    "text": "query AnthropometryTableQuery(\n  $filter: AnthropometriesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: anthropometries(anthropometriesFilter: $filter) {\n    _id: id\n    date\n    height\n    waist\n    weight\n    arms\n    chest\n  }\n  totalCount: anthropometriesCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a5688e738e5877276494ec556102a655';

module.exports = node;
