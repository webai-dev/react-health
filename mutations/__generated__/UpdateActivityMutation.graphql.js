/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ActivityPartialInput = {|
  id?: ?number,
  label?: ?string,
  met?: ?number,
  metMinute?: ?number,
  type?: ?string,
|};
export type UpdateActivityMutationVariables = {|
  id: number,
  input: ActivityPartialInput,
|};
export type UpdateActivityMutationResponse = {|
  +updateActivity: ?{|
    +_id: ?number
  |}
|};
export type UpdateActivityMutation = {|
  variables: UpdateActivityMutationVariables,
  response: UpdateActivityMutationResponse,
|};
*/


/*
mutation UpdateActivityMutation(
  $id: Float!
  $input: ActivityPartialInput!
) {
  updateActivity(id: $id, activityPartialInput: $input) {
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
        "name": "activityPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ActivityPartialWithRelations",
    "kind": "LinkedField",
    "name": "updateActivity",
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
    "name": "UpdateActivityMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateActivityMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a1c7f989de109d2841698ec89a9164ce",
    "id": null,
    "metadata": {},
    "name": "UpdateActivityMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateActivityMutation(\n  $id: Float!\n  $input: ActivityPartialInput!\n) {\n  updateActivity(id: $id, activityPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b58f08ef76120dd2ca851882c67da2a';

module.exports = node;
