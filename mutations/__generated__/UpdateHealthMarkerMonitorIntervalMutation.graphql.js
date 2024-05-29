/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HealthMarkerMonitorIntervalPartialInput = {|
  healthMarkerMonitorId?: ?number,
  id?: ?number,
  lowerTarget?: ?number,
  providerId?: ?number,
  upperTarget?: ?number,
  userId?: ?number,
|};
export type UpdateHealthMarkerMonitorIntervalMutationVariables = {|
  id: number,
  input: HealthMarkerMonitorIntervalPartialInput,
|};
export type UpdateHealthMarkerMonitorIntervalMutationResponse = {|
  +updateHealthMarkerMonitorInterval: ?{|
    +_id: ?number
  |}
|};
export type UpdateHealthMarkerMonitorIntervalMutation = {|
  variables: UpdateHealthMarkerMonitorIntervalMutationVariables,
  response: UpdateHealthMarkerMonitorIntervalMutationResponse,
|};
*/


/*
mutation UpdateHealthMarkerMonitorIntervalMutation(
  $id: Float!
  $input: HealthMarkerMonitorIntervalPartialInput!
) {
  updateHealthMarkerMonitorInterval(id: $id, healthMarkerMonitorIntervalPartialInput: $input) {
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
        "name": "healthMarkerMonitorIntervalPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "HealthMarkerMonitorIntervalWithRelations",
    "kind": "LinkedField",
    "name": "updateHealthMarkerMonitorInterval",
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
    "name": "UpdateHealthMarkerMonitorIntervalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateHealthMarkerMonitorIntervalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2badf079b93a4bbc4b653f22fef02b77",
    "id": null,
    "metadata": {},
    "name": "UpdateHealthMarkerMonitorIntervalMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateHealthMarkerMonitorIntervalMutation(\n  $id: Float!\n  $input: HealthMarkerMonitorIntervalPartialInput!\n) {\n  updateHealthMarkerMonitorInterval(id: $id, healthMarkerMonitorIntervalPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '65a1cbe756f8482c545c41ab54f0420f';

module.exports = node;
