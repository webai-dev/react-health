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
export type HealthMarkerMonitorGraphCholesterolQueryVariables = {|
  filter?: ?CholesterolsFilterInput
|};
export type HealthMarkerMonitorGraphCholesterolQueryResponse = {|
  +cholesterols: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +ldlChol: ?number,
    +totalChol: ?number,
    +hdlChol: ?number,
    +triglycerides: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphCholesterolQuery = {|
  variables: HealthMarkerMonitorGraphCholesterolQueryVariables,
  response: HealthMarkerMonitorGraphCholesterolQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphCholesterolQuery(
  $filter: CholesterolsFilterInput
) {
  cholesterols(cholesterolsFilter: $filter) {
    _id: id
    ldlChol
    totalChol
    hdlChol
    triglycerides
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
        "name": "hdlChol",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "triglycerides",
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
    "name": "HealthMarkerMonitorGraphCholesterolQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphCholesterolQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7ab0f3c1cfd6e8a31a10ce2f8d496357",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphCholesterolQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphCholesterolQuery(\n  $filter: CholesterolsFilterInput\n) {\n  cholesterols(cholesterolsFilter: $filter) {\n    _id: id\n    ldlChol\n    totalChol\n    hdlChol\n    triglycerides\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c3b752030a2b25322c93a66d8c5375c9';

module.exports = node;
