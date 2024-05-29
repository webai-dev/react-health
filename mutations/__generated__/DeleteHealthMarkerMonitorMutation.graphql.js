/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteHealthMarkerMonitorMutationVariables = {|
  id: number
|};
export type DeleteHealthMarkerMonitorMutationResponse = {|
  +deleteHealthMarkerMonitor: ?{|
    +_id: ?number
  |}
|};
export type DeleteHealthMarkerMonitorMutation = {|
  variables: DeleteHealthMarkerMonitorMutationVariables,
  response: DeleteHealthMarkerMonitorMutationResponse,
|};
*/


/*
mutation DeleteHealthMarkerMonitorMutation(
  $id: Float!
) {
  deleteHealthMarkerMonitor(id: $id) {
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
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "HealthMarkerMonitor2",
    "kind": "LinkedField",
    "name": "deleteHealthMarkerMonitor",
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
    "name": "DeleteHealthMarkerMonitorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteHealthMarkerMonitorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3738386dcfb05d533b2302fcb4ac09dc",
    "id": null,
    "metadata": {},
    "name": "DeleteHealthMarkerMonitorMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteHealthMarkerMonitorMutation(\n  $id: Float!\n) {\n  deleteHealthMarkerMonitor(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba9bf537b89cd35b54cce1a93ca8f620';

module.exports = node;
