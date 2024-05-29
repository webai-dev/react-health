/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewHealthMarkerMonitorIntervalInput = {|
  healthMarkerMonitorId?: ?number,
  lowerTarget?: ?number,
  providerId?: ?number,
  upperTarget?: ?number,
  userId?: ?number,
|};
export type CreateHealthMarkerMonitorIntervalMutationVariables = {|
  input: NewHealthMarkerMonitorIntervalInput
|};
export type CreateHealthMarkerMonitorIntervalMutationResponse = {|
  +createHealthMarkerMonitorInterval: ?{|
    +_id: ?number
  |}
|};
export type CreateHealthMarkerMonitorIntervalMutation = {|
  variables: CreateHealthMarkerMonitorIntervalMutationVariables,
  response: CreateHealthMarkerMonitorIntervalMutationResponse,
|};
*/


/*
mutation CreateHealthMarkerMonitorIntervalMutation(
  $input: NewHealthMarkerMonitorIntervalInput!
) {
  createHealthMarkerMonitorInterval(newHealthMarkerMonitorIntervalInput: $input) {
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
        "name": "newHealthMarkerMonitorIntervalInput",
        "variableName": "input"
      }
    ],
    "concreteType": "HealthMarkerMonitorInterval",
    "kind": "LinkedField",
    "name": "createHealthMarkerMonitorInterval",
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
    "name": "CreateHealthMarkerMonitorIntervalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateHealthMarkerMonitorIntervalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0c30f263db8364590f5b36012f874be8",
    "id": null,
    "metadata": {},
    "name": "CreateHealthMarkerMonitorIntervalMutation",
    "operationKind": "mutation",
    "text": "mutation CreateHealthMarkerMonitorIntervalMutation(\n  $input: NewHealthMarkerMonitorIntervalInput!\n) {\n  createHealthMarkerMonitorInterval(newHealthMarkerMonitorIntervalInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8e228e6ba36d76697fe68b92cee6c3a4';

module.exports = node;
