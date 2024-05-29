/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteActivityMutationVariables = {|
  id: number
|};
export type DeleteActivityMutationResponse = {|
  +deleteActivity: ?{|
    +_id: ?number
  |}
|};
export type DeleteActivityMutation = {|
  variables: DeleteActivityMutationVariables,
  response: DeleteActivityMutationResponse,
|};
*/


/*
mutation DeleteActivityMutation(
  $id: Float!
) {
  deleteActivity(id: $id) {
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
    "concreteType": "Activity2",
    "kind": "LinkedField",
    "name": "deleteActivity",
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
    "name": "DeleteActivityMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteActivityMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4f302e95a7b2063bff0f3a4cef4b3a54",
    "id": null,
    "metadata": {},
    "name": "DeleteActivityMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteActivityMutation(\n  $id: Float!\n) {\n  deleteActivity(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c243d65038eb07b9f4f11279f3292bf3';

module.exports = node;
