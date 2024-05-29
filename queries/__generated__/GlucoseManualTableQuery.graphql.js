/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GlucoseManualsFilterInput = {|
  fields?: ?GlucoseManualFieldsInput,
  include?: ?$ReadOnlyArray<?GlucoseManualIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type GlucoseManualFieldsInput = {|
  clock?: ?boolean,
  date?: ?boolean,
  glucoseABreakfast?: ?boolean,
  glucoseADinner?: ?boolean,
  glucoseALunch?: ?boolean,
  glucoseBBreakfast?: ?boolean,
  glucoseBDinner?: ?boolean,
  glucoseBLunch?: ?boolean,
  glucoseFasting?: ?boolean,
  glucoseRandom?: ?boolean,
  hba1c?: ?boolean,
  id?: ?boolean,
  userId?: ?boolean,
|};
export type GlucoseManualIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?GlucoseManualScopeFilterInput,
|};
export type GlucoseManualScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type GlucoseManualTableQueryVariables = {|
  filter: GlucoseManualsFilterInput,
  totalCountCondition?: ?any,
|};
export type GlucoseManualTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +glucoseABreakfast: ?number,
    +glucoseADinner: ?number,
    +glucoseALunch: ?number,
    +glucoseBBreakfast: ?number,
    +glucoseBDinner: ?number,
    +glucoseBLunch: ?number,
    +glucoseFasting: ?number,
    +glucoseRandom: ?number,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type GlucoseManualTableQuery = {|
  variables: GlucoseManualTableQueryVariables,
  response: GlucoseManualTableQueryResponse,
|};
*/


/*
query GlucoseManualTableQuery(
  $filter: GlucoseManualsFilterInput!
  $totalCountCondition: JSON
) {
  items: glucoseManuals(glucoseManualsFilter: $filter) {
    _id: id
    date
    glucoseABreakfast
    glucoseADinner
    glucoseALunch
    glucoseBBreakfast
    glucoseBDinner
    glucoseBLunch
    glucoseFasting
    glucoseRandom
  }
  totalCount: glucoseManualsCount(where: $totalCountCondition) {
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
        "name": "glucoseManualsFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "GlucoseManualWithRelations",
    "kind": "LinkedField",
    "name": "glucoseManuals",
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
        "name": "glucoseABreakfast",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "glucoseADinner",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "glucoseALunch",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "glucoseBBreakfast",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "glucoseBDinner",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "glucoseBLunch",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "glucoseFasting",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "glucoseRandom",
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
    "name": "glucoseManualsCount",
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
    "name": "GlucoseManualTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GlucoseManualTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "35ab7efd0292990c339d44efd17b3de9",
    "id": null,
    "metadata": {},
    "name": "GlucoseManualTableQuery",
    "operationKind": "query",
    "text": "query GlucoseManualTableQuery(\n  $filter: GlucoseManualsFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: glucoseManuals(glucoseManualsFilter: $filter) {\n    _id: id\n    date\n    glucoseABreakfast\n    glucoseADinner\n    glucoseALunch\n    glucoseBBreakfast\n    glucoseBDinner\n    glucoseBLunch\n    glucoseFasting\n    glucoseRandom\n  }\n  totalCount: glucoseManualsCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5f38cb56c4fe28510e65c269d1dc9687';

module.exports = node;
