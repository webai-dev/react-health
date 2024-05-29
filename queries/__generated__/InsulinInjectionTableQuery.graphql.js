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
export type InsulinInjectionTableQueryVariables = {|
  filter: InsulinInjectionsFilterInput,
  totalCountCondition?: ?any,
|};
export type InsulinInjectionTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +dose: ?number,
    +fastActing: ?number,
    +longActing: ?number,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type InsulinInjectionTableQuery = {|
  variables: InsulinInjectionTableQueryVariables,
  response: InsulinInjectionTableQueryResponse,
|};
*/


/*
query InsulinInjectionTableQuery(
  $filter: InsulinInjectionsFilterInput!
  $totalCountCondition: JSON
) {
  items: insulinInjections(insulinInjectionsFilter: $filter) {
    _id: id
    date
    dose
    fastActing
    longActing
  }
  totalCount: insulinInjectionsCount(where: $totalCountCondition) {
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
        "name": "date",
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
    "name": "insulinInjectionsCount",
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
    "name": "InsulinInjectionTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InsulinInjectionTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "39f9bc72872ab1735fdf42e84a940e62",
    "id": null,
    "metadata": {},
    "name": "InsulinInjectionTableQuery",
    "operationKind": "query",
    "text": "query InsulinInjectionTableQuery(\n  $filter: InsulinInjectionsFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: insulinInjections(insulinInjectionsFilter: $filter) {\n    _id: id\n    date\n    dose\n    fastActing\n    longActing\n  }\n  totalCount: insulinInjectionsCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a4fe52a528d8c72167ef553cf32647e3';

module.exports = node;
