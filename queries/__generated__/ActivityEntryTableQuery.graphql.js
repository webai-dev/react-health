/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ActivityEntriesFilterInput = {|
  fields?: ?ActivityEntryFieldsInput,
  include?: ?$ReadOnlyArray<?ActivityEntryIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type ActivityEntryFieldsInput = {|
  activityId?: ?boolean,
  amountMinutes?: ?boolean,
  date?: ?boolean,
  energy?: ?boolean,
  id?: ?boolean,
  time?: ?boolean,
  userId?: ?boolean,
|};
export type ActivityEntryIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?ActivityEntryScopeFilterInput,
|};
export type ActivityEntryScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
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
export type ActivityEntryTableQueryVariables = {|
  filter: ActivityEntriesFilterInput,
  anthropometriesFilter: AnthropometriesFilterInput,
  totalCountCondition?: ?any,
|};
export type ActivityEntryTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +activityId: ?number,
    +date: string,
    +time: string,
    +energy: ?number,
    +amountMinutes: ?number,
  |}>,
  +anthropometries: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +weight: ?number,
    +date: string,
  |}>,
  +activities: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +label: string,
    +type: ?string,
    +met: number,
    +metMinute: ?number,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type ActivityEntryTableQuery = {|
  variables: ActivityEntryTableQueryVariables,
  response: ActivityEntryTableQueryResponse,
|};
*/


/*
query ActivityEntryTableQuery(
  $filter: ActivityEntriesFilterInput!
  $anthropometriesFilter: AnthropometriesFilterInput!
  $totalCountCondition: JSON
) {
  items: activityEntries(activityEntriesFilter: $filter) {
    _id: id
    activityId
    date
    time
    energy
    amountMinutes
  }
  anthropometries(anthropometriesFilter: $anthropometriesFilter) {
    _id: id
    weight
    date
  }
  activities {
    _id: id
    label
    type
    met
    metMinute
  }
  totalCount: activityEntriesCount(where: $totalCountCondition) {
    count
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "anthropometriesFilter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "filter"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "totalCountCondition"
},
v3 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v5 = [
  {
    "alias": "items",
    "args": [
      {
        "kind": "Variable",
        "name": "activityEntriesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "ActivityEntryWithRelations",
    "kind": "LinkedField",
    "name": "activityEntries",
    "plural": true,
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "activityId",
        "storageKey": null
      },
      (v4/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "time",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "energy",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amountMinutes",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "anthropometriesFilter",
        "variableName": "anthropometriesFilter"
      }
    ],
    "concreteType": "AnthropometryWithRelations",
    "kind": "LinkedField",
    "name": "anthropometries",
    "plural": true,
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "weight",
        "storageKey": null
      },
      (v4/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ActivityWithRelations",
    "kind": "LinkedField",
    "name": "activities",
    "plural": true,
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "met",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "metMinute",
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
    "name": "activityEntriesCount",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActivityEntryTableQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "ActivityEntryTableQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "1b223759fef6402ac73a5f34288f9b67",
    "id": null,
    "metadata": {},
    "name": "ActivityEntryTableQuery",
    "operationKind": "query",
    "text": "query ActivityEntryTableQuery(\n  $filter: ActivityEntriesFilterInput!\n  $anthropometriesFilter: AnthropometriesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: activityEntries(activityEntriesFilter: $filter) {\n    _id: id\n    activityId\n    date\n    time\n    energy\n    amountMinutes\n  }\n  anthropometries(anthropometriesFilter: $anthropometriesFilter) {\n    _id: id\n    weight\n    date\n  }\n  activities {\n    _id: id\n    label\n    type\n    met\n    metMinute\n  }\n  totalCount: activityEntriesCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ebdc0b8bd90757d0986ec6f1845099c6';

module.exports = node;
