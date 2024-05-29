/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StepsFilterInput = {|
  fields?: ?StepFieldsInput,
  include?: ?$ReadOnlyArray<?StepIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type StepFieldsInput = {|
  date?: ?boolean,
  id?: ?boolean,
  restingHeartRate?: ?boolean,
  sleepSmartWatch?: ?boolean,
  steps?: ?boolean,
  stressSmartWatch?: ?boolean,
  training?: ?boolean,
  userId?: ?boolean,
|};
export type StepIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?StepScopeFilterInput,
|};
export type StepScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type StepTableQueryVariables = {|
  filter: StepsFilterInput,
  totalCountCondition?: ?any,
|};
export type StepTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +steps: ?number,
    +training: ?number,
    +restingHeartRate: ?number,
    +stressSmartWatch: ?number,
    +sleepSmartWatch: ?number,
    +date: string,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type StepTableQuery = {|
  variables: StepTableQueryVariables,
  response: StepTableQueryResponse,
|};
*/


/*
query StepTableQuery(
  $filter: StepsFilterInput!
  $totalCountCondition: JSON
) {
  items: steps(stepsFilter: $filter) {
    _id: id
    steps
    training
    restingHeartRate
    stressSmartWatch
    sleepSmartWatch
    date
  }
  totalCount: stepsCount(where: $totalCountCondition) {
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
        "name": "stepsFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "StepWithRelations",
    "kind": "LinkedField",
    "name": "steps",
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
        "name": "steps",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "training",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "restingHeartRate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "stressSmartWatch",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sleepSmartWatch",
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
    "name": "stepsCount",
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
    "name": "StepTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StepTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2a9b46cab596843885866d3bca682716",
    "id": null,
    "metadata": {},
    "name": "StepTableQuery",
    "operationKind": "query",
    "text": "query StepTableQuery(\n  $filter: StepsFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: steps(stepsFilter: $filter) {\n    _id: id\n    steps\n    training\n    restingHeartRate\n    stressSmartWatch\n    sleepSmartWatch\n    date\n  }\n  totalCount: stepsCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '543679fca06e3bd98e04ff13c0c95cb4';

module.exports = node;
