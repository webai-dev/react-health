/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteLifestyleMutationVariables = {|
  id: number
|};
export type DeleteLifestyleMutationResponse = {|
  +deleteLifestyle: ?{|
    +_id: ?number
  |}
|};
export type DeleteLifestyleMutation = {|
  variables: DeleteLifestyleMutationVariables,
  response: DeleteLifestyleMutationResponse,
|};
*/


/*
mutation DeleteLifestyleMutation(
  $id: Float!
) {
  deleteLifestyle(id: $id) {
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
    "concreteType": "Lifestyle2",
    "kind": "LinkedField",
    "name": "deleteLifestyle",
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
    "name": "DeleteLifestyleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteLifestyleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "196ff7a8368c9045e3ec071a53c4ed6f",
    "id": null,
    "metadata": {},
    "name": "DeleteLifestyleMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteLifestyleMutation(\n  $id: Float!\n) {\n  deleteLifestyle(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fe11af796db3982cae9fd610e7531a75';

module.exports = node;
