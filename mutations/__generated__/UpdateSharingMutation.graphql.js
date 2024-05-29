/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SharingPartialInput = {|
  comment?: ?string,
  dateStarted?: ?string,
  diabetesControl?: ?string,
  email?: ?string,
  id?: ?number,
  name?: ?string,
  phone?: ?string,
  providerId?: ?number,
  terminated?: ?string,
  twilioChatChannelId?: ?number,
  userId?: ?number,
|};
export type UpdateSharingMutationVariables = {|
  id: number,
  input: SharingPartialInput,
|};
export type UpdateSharingMutationResponse = {|
  +updateSharing: ?{|
    +_id: ?number
  |}
|};
export type UpdateSharingMutation = {|
  variables: UpdateSharingMutationVariables,
  response: UpdateSharingMutationResponse,
|};
*/


/*
mutation UpdateSharingMutation(
  $id: Float!
  $input: SharingPartialInput!
) {
  updateSharing(id: $id, sharingPartialInput: $input) {
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
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "sharingPartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "SharingWithRelations",
    "kind": "LinkedField",
    "name": "updateSharing",
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
    "name": "UpdateSharingMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateSharingMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c87154338d79b9444bfca66749149db3",
    "id": null,
    "metadata": {},
    "name": "UpdateSharingMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateSharingMutation(\n  $id: Float!\n  $input: SharingPartialInput!\n) {\n  updateSharing(id: $id, sharingPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f4628a9d761ec2ae729d9b0f0f52abc8';

module.exports = node;
