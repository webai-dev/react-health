/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewHealthMarkerMonitorInput = {|
  healthMarkerId?: ?number,
  providerId?: ?number,
  userId?: ?number,
|};
export type CreateHealthMarkerMonitorMutationVariables = {|
  input: NewHealthMarkerMonitorInput
|};
export type CreateHealthMarkerMonitorMutationResponse = {|
  +createHealthMarkerMonitor: ?{|
    +_id: ?number
  |}
|};
export type CreateHealthMarkerMonitorMutation = {|
  variables: CreateHealthMarkerMonitorMutationVariables,
  response: CreateHealthMarkerMonitorMutationResponse,
|};
*/


/*
mutation CreateHealthMarkerMonitorMutation(
  $input: NewHealthMarkerMonitorInput!
) {
  createHealthMarkerMonitor(newHealthMarkerMonitorInput: $input) {
    _id: id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "name": "newHealthMarkerMonitorInput",
        "variableName": "input"
      }
    ],
    "concreteType": "HealthMarkerMonitor",
    "kind": "LinkedField",
    "name": "createHealthMarkerMonitor",
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
    "name": "CreateHealthMarkerMonitorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateHealthMarkerMonitorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5ceffbb7024f781cf8ed05092c08fc19",
    "id": null,
    "metadata": {},
    "name": "CreateHealthMarkerMonitorMutation",
    "operationKind": "mutation",
    "text": "mutation CreateHealthMarkerMonitorMutation(\n  $input: NewHealthMarkerMonitorInput!\n) {\n  createHealthMarkerMonitor(newHealthMarkerMonitorInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd7e293457b8d7108872e136b9f375e27';

module.exports = node;
