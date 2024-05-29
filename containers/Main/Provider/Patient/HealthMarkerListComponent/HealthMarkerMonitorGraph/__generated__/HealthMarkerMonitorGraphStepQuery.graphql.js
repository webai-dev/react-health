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
export type HealthMarkerMonitorGraphStepQueryVariables = {|
  filter?: ?StepsFilterInput
|};
export type HealthMarkerMonitorGraphStepQueryResponse = {|
  +steps: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +steps: ?number,
    +training: ?number,
    +stressSmartWatch: ?number,
    +sleepSmartWatch: ?number,
    +restingHeartRate: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphStepQuery = {|
  variables: HealthMarkerMonitorGraphStepQueryVariables,
  response: HealthMarkerMonitorGraphStepQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphStepQuery(
  $filter: StepsFilterInput
) {
  steps(stepsFilter: $filter) {
    _id: id
    steps
    training
    stressSmartWatch
    sleepSmartWatch
    restingHeartRate
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
        "name": "restingHeartRate",
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
    "name": "HealthMarkerMonitorGraphStepQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphStepQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3efaa2218b61a3152eb20f42654e7992",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphStepQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphStepQuery(\n  $filter: StepsFilterInput\n) {\n  steps(stepsFilter: $filter) {\n    _id: id\n    steps\n    training\n    stressSmartWatch\n    sleepSmartWatch\n    restingHeartRate\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0972bef3329350b3cd237a47979dca1';

module.exports = node;
