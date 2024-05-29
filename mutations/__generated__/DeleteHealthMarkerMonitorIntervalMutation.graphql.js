/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteHealthMarkerMonitorIntervalMutationVariables = {|
  id: number
|};
export type DeleteHealthMarkerMonitorIntervalMutationResponse = {|
  +deleteHealthMarkerMonitorInterval: ?{|
    +_id: ?number
  |}
|};
export type DeleteHealthMarkerMonitorIntervalMutation = {|
  variables: DeleteHealthMarkerMonitorIntervalMutationVariables,
  response: DeleteHealthMarkerMonitorIntervalMutationResponse,
|};
*/


/*
mutation DeleteHealthMarkerMonitorIntervalMutation(
  $id: Float!
) {
  deleteHealthMarkerMonitorInterval(id: $id) {
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
    "concreteType": "HealthMarkerMonitorInterval2",
    "kind": "LinkedField",
    "name": "deleteHealthMarkerMonitorInterval",
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
    "name": "DeleteHealthMarkerMonitorIntervalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteHealthMarkerMonitorIntervalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a224d8d5df75b3879d7df0a2a9ff9464",
    "id": null,
    "metadata": {},
    "name": "DeleteHealthMarkerMonitorIntervalMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteHealthMarkerMonitorIntervalMutation(\n  $id: Float!\n) {\n  deleteHealthMarkerMonitorInterval(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '78f51796ce2f4a698c8bb6adde6d337c';

module.exports = node;
