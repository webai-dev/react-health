/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HealthMarkerListComponent_viewer$ref: FragmentReference;
declare export opaque type HealthMarkerListComponent_viewer$fragmentType: HealthMarkerListComponent_viewer$ref;
export type HealthMarkerListComponent_viewer = {|
  +viewer: ?{|
    +_id: ?number
  |},
  +healthMarkers: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +reference: string,
    +marker: string,
    +unit: ?string,
  |}>,
  +healthMarkerMonitors: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +userId: ?number,
    +providerId: ?number,
    +healthMarkerId: ?number,
  |}>,
  +healthMarkerMonitorIntervals: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +userId: ?number,
    +providerId: ?number,
    +upperTarget: ?number,
    +lowerTarget: ?number,
    +healthMarkerMonitorId: ?number,
  |}>,
  +$refType: HealthMarkerListComponent_viewer$ref,
|};
export type HealthMarkerListComponent_viewer$data = HealthMarkerListComponent_viewer;
export type HealthMarkerListComponent_viewer$key = {
  +$data?: HealthMarkerListComponent_viewer$data,
  +$fragmentRefs: HealthMarkerListComponent_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "providerId",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "healthMarkerMonitorIntervalsFilter"
    },
    {
      "kind": "RootArgument",
      "name": "healthMarkerMonitorsFilter"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "HealthMarkerListComponent_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserWithRelations",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HealthMarkerWithRelations",
      "kind": "LinkedField",
      "name": "healthMarkers",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "reference",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "marker",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "unit",
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
          "name": "healthMarkerMonitorsFilter",
          "variableName": "healthMarkerMonitorsFilter"
        }
      ],
      "concreteType": "HealthMarkerMonitorWithRelations",
      "kind": "LinkedField",
      "name": "healthMarkerMonitors",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "healthMarkerId",
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
          "name": "healthMarkerMonitorIntervalsFilter",
          "variableName": "healthMarkerMonitorIntervalsFilter"
        }
      ],
      "concreteType": "HealthMarkerMonitorIntervalWithRelations",
      "kind": "LinkedField",
      "name": "healthMarkerMonitorIntervals",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "upperTarget",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lowerTarget",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "healthMarkerMonitorId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '7e12ce426a43f20ad738c31395d15363';

module.exports = node;
