/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HealthMarkerMonitorPartialInput = {|
  healthMarkerId?: ?number,
  id?: ?number,
  providerId?: ?number,
  userId?: ?number,
|};
export type UpdateHealthMarkerMonitorMutationVariables = {|
  id: number,
  input: HealthMarkerMonitorPartialInput,
|};
export type UpdateHealthMarkerMonitorMutationResponse = {|
  +updateHealthMarkerMonitor: ?{|
    +_id: ?number
  |}
|};
export type UpdateHealthMarkerMonitorMutation = {|
  variables: UpdateHealthMarkerMonitorMutationVariables,
  response: UpdateHealthMarkerMonitorMutationResponse,
|};
*/


/*
mutation UpdateHealthMarkerMonitorMutation(
  $id: Float!
  $input: HealthMarkerMonitorPartialInput!
) {
  updateHealthMarkerMonitor(id: $id, healthMarkerMonitorPartialInput: $input) {
    _id: id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "healthMarkerMonitorPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "HealthMarkerMonitorWithRelations",
    "kind": "LinkedField",
    "name": "updateHealthMarkerMonitor",
    "plural": false,
    "selections": [
      {
        "alias": "_id",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "UpdateHealthMarkerMonitorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateHealthMarkerMonitorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6e9f7a168744b79d29620b486b815e0c",
    "id": null,
    "metadata": {},
    "name": "UpdateHealthMarkerMonitorMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateHealthMarkerMonitorMutation(\n  $id: Float!\n  $input: HealthMarkerMonitorPartialInput!\n) {\n  updateHealthMarkerMonitor(id: $id, healthMarkerMonitorPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96fa2f9500a2682a2787d9d25e3b55e0';

module.exports = node;
