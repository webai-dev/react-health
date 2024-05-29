/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteKidneyMutationVariables = {|
  id: number
|};
export type DeleteKidneyMutationResponse = {|
  +deleteKidney: ?{|
    +_id: ?number
  |}
|};
export type DeleteKidneyMutation = {|
  variables: DeleteKidneyMutationVariables,
  response: DeleteKidneyMutationResponse,
|};
*/


/*
mutation DeleteKidneyMutation(
  $id: Float!
) {
  deleteKidney(id: $id) {
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
    "concreteType": "Kidney2",
    "kind": "LinkedField",
    "name": "deleteKidney",
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
    "name": "DeleteKidneyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteKidneyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "870f023deabf48cafea69e7bcdfe86b9",
    "id": null,
    "metadata": {},
    "name": "DeleteKidneyMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteKidneyMutation(\n  $id: Float!\n) {\n  deleteKidney(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dfb7635f27f3681f5025d50f4836cc0d';

module.exports = node;
