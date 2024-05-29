/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ExercisesFilterInput = {|
  fields?: ?ExerciseFieldsInput,
  include?: ?$ReadOnlyArray<?ExerciseIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type ExerciseFieldsInput = {|
  date?: ?boolean,
  id?: ?boolean,
  intensiveExercise?: ?boolean,
  lightExercise?: ?boolean,
  moderateExercise?: ?boolean,
  restingHeartRate?: ?boolean,
  source?: ?boolean,
  standing?: ?boolean,
  steps?: ?boolean,
  userId?: ?boolean,
|};
export type ExerciseIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?ExerciseScopeFilterInput,
|};
export type ExerciseScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type HealthMarkerMonitorGraphExerciseQueryVariables = {|
  filter?: ?ExercisesFilterInput
|};
export type HealthMarkerMonitorGraphExerciseQueryResponse = {|
  +exercises: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +restingHeartRate: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphExerciseQuery = {|
  variables: HealthMarkerMonitorGraphExerciseQueryVariables,
  response: HealthMarkerMonitorGraphExerciseQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphExerciseQuery(
  $filter: ExercisesFilterInput
) {
  exercises(exercisesFilter: $filter) {
    _id: id
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
        "name": "exercisesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "ExerciseWithRelations",
    "kind": "LinkedField",
    "name": "exercises",
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
    "name": "HealthMarkerMonitorGraphExerciseQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphExerciseQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "638c618341380ea4e8105477f3bcffa3",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphExerciseQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphExerciseQuery(\n  $filter: ExercisesFilterInput\n) {\n  exercises(exercisesFilter: $filter) {\n    _id: id\n    restingHeartRate\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b7fa8875f27d2369c0ba2350b7b67eea';

module.exports = node;
