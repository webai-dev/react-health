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
export type HealthMarkerMonitorGraphGlucoseManualQueryVariables = {|
  filter?: ?GlucoseManualsFilterInput
|};
export type HealthMarkerMonitorGraphGlucoseManualQueryResponse = {|
  +glucoseManuals: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +glucoseRandom: ?number,
    +glucoseFasting: ?number,
    +glucoseBBreakfast: ?number,
    +glucoseABreakfast: ?number,
    +glucoseBLunch: ?number,
    +glucoseALunch: ?number,
    +glucoseBDinner: ?number,
    +glucoseADinner: ?number,
    +hba1c: ?number,
    +date: string,
  |}>
|};
export type HealthMarkerMonitorGraphGlucoseManualQuery = {|
  variables: HealthMarkerMonitorGraphGlucoseManualQueryVariables,
  response: HealthMarkerMonitorGraphGlucoseManualQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphGlucoseManualQuery(
  $filter: GlucoseManualsFilterInput
) {
  glucoseManuals(glucoseManualsFilter: $filter) {
    _id: id
    glucoseRandom
    glucoseFasting
    glucoseBBreakfast
    glucoseABreakfast
    glucoseBLunch
    glucoseALunch
    glucoseBDinner
    glucoseADinner
    hba1c
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
        "name": "glucoseRandom",
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
        "name": "glucoseBBreakfast",
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
        "name": "glucoseBLunch",
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
        "name": "glucoseBDinner",
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
        "name": "hba1c",
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
    "name": "HealthMarkerMonitorGraphGlucoseManualQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphGlucoseManualQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cbedf925333a613bc6e4364a34145a85",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphGlucoseManualQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphGlucoseManualQuery(\n  $filter: GlucoseManualsFilterInput\n) {\n  glucoseManuals(glucoseManualsFilter: $filter) {\n    _id: id\n    glucoseRandom\n    glucoseFasting\n    glucoseBBreakfast\n    glucoseABreakfast\n    glucoseBLunch\n    glucoseALunch\n    glucoseBDinner\n    glucoseADinner\n    hba1c\n    date\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'adf6557f45be7629b68ba4710e4553a1';

module.exports = node;
