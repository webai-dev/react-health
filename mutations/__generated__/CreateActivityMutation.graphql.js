/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewActivityInput = {|
  label: string,
  met: number,
  metMinute?: ?number,
  type?: ?string,
|};
export type CreateActivityMutationVariables = {|
  input: NewActivityInput
|};
export type CreateActivityMutationResponse = {|
  +createActivity: ?{|
    +_id: ?number
  |}
|};
export type CreateActivityMutation = {|
  variables: CreateActivityMutationVariables,
  response: CreateActivityMutationResponse,
|};
*/


/*
mutation CreateActivityMutation(
  $input: NewActivityInput!
) {
  createActivity(newActivityInput: $input) {
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
        "name": "newActivityInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Activity",
    "kind": "LinkedField",
    "name": "createActivity",
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
    "name": "CreateActivityMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateActivityMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b7375253e5487df6a3315aebcc401011",
    "id": null,
    "metadata": {},
    "name": "CreateActivityMutation",
    "operationKind": "mutation",
    "text": "mutation CreateActivityMutation(\n  $input: NewActivityInput!\n) {\n  createActivity(newActivityInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ccbd0bfa5ee01302e4ac166350cf59ae';

module.exports = node;
