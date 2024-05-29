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
export type ExerciseTableQueryVariables = {|
  filter: ExercisesFilterInput,
  totalCountCondition?: ?any,
|};
export type ExerciseTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +date: string,
    +intensiveExercise: ?number,
    +moderateExercise: ?number,
    +restingHeartRate: ?number,
    +source: ?string,
    +standing: ?number,
    +steps: ?number,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type ExerciseTableQuery = {|
  variables: ExerciseTableQueryVariables,
  response: ExerciseTableQueryResponse,
|};
*/


/*
query ExerciseTableQuery(
  $filter: ExercisesFilterInput!
  $totalCountCondition: JSON
) {
  items: exercises(exercisesFilter: $filter) {
    _id: id
    date
    intensiveExercise
    moderateExercise
    restingHeartRate
    source
    standing
    steps
  }
  totalCount: exercisesCount(where: $totalCountCondition) {
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
        "name": "date",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "intensiveExercise",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "moderateExercise",
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
        "name": "source",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "standing",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "steps",
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
    "name": "exercisesCount",
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
    "name": "ExerciseTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExerciseTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2333b1394a97056e22aa80c909120dd5",
    "id": null,
    "metadata": {},
    "name": "ExerciseTableQuery",
    "operationKind": "query",
    "text": "query ExerciseTableQuery(\n  $filter: ExercisesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: exercises(exercisesFilter: $filter) {\n    _id: id\n    date\n    intensiveExercise\n    moderateExercise\n    restingHeartRate\n    source\n    standing\n    steps\n  }\n  totalCount: exercisesCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bbf0bbb93f213e021a5dab511e9bf1a1';

module.exports = node;
