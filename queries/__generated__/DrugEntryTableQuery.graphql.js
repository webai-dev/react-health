/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DrugEntriesFilterInput = {|
  fields?: ?DrugEntryFieldsInput,
  include?: ?$ReadOnlyArray<?DrugEntryIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DrugEntryFieldsInput = {|
  comment?: ?boolean,
  dateStarted?: ?boolean,
  doseAmount?: ?boolean,
  doseClock?: ?boolean,
  drugId?: ?boolean,
  id?: ?boolean,
  onDemand?: ?boolean,
  pushNotice?: ?boolean,
  userId?: ?boolean,
|};
export type DrugEntryIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?DrugEntryScopeFilterInput,
|};
export type DrugEntryScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DrugEntryTableQueryVariables = {|
  filter: DrugEntriesFilterInput,
  totalCountCondition?: ?any,
|};
export type DrugEntryTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +drugId: ?number,
    +comment: ?string,
    +dateStarted: ?string,
    +onDemand: ?boolean,
    +pushNotice: ?boolean,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
  +drugs: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +labelSubTitle: ?string,
  |}>,
|};
export type DrugEntryTableQuery = {|
  variables: DrugEntryTableQueryVariables,
  response: DrugEntryTableQueryResponse,
|};
*/


/*
query DrugEntryTableQuery(
  $filter: DrugEntriesFilterInput!
  $totalCountCondition: JSON
) {
  items: drugEntries(drugEntriesFilter: $filter) {
    _id: id
    drugId
    comment
    dateStarted
    onDemand
    pushNotice
  }
  totalCount: drugEntriesCount(where: $totalCountCondition) {
    count
  }
  drugs {
    _id: id
    labelSubTitle
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
v1 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": "items",
    "args": [
      {
        "kind": "Variable",
        "name": "drugEntriesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "DrugEntryWithRelations",
    "kind": "LinkedField",
    "name": "drugEntries",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "drugId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "comment",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateStarted",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "onDemand",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pushNotice",
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
    "name": "drugEntriesCount",
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
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "DrugWithRelations",
    "kind": "LinkedField",
    "name": "drugs",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "labelSubTitle",
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
    "name": "DrugEntryTableQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DrugEntryTableQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "39ea36fbe109e69f531b12f8558d794a",
    "id": null,
    "metadata": {},
    "name": "DrugEntryTableQuery",
    "operationKind": "query",
    "text": "query DrugEntryTableQuery(\n  $filter: DrugEntriesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: drugEntries(drugEntriesFilter: $filter) {\n    _id: id\n    drugId\n    comment\n    dateStarted\n    onDemand\n    pushNotice\n  }\n  totalCount: drugEntriesCount(where: $totalCountCondition) {\n    count\n  }\n  drugs {\n    _id: id\n    labelSubTitle\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6842510576c99b95c151322da9e2d3ea';

module.exports = node;
