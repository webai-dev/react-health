/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteInsulinInjectionMutationVariables = {|
  id: number
|};
export type DeleteInsulinInjectionMutationResponse = {|
  +deleteInsulinInjection: ?{|
    +_id: ?number
  |}
|};
export type DeleteInsulinInjectionMutation = {|
  variables: DeleteInsulinInjectionMutationVariables,
  response: DeleteInsulinInjectionMutationResponse,
|};
*/


/*
mutation DeleteInsulinInjectionMutation(
  $id: Float!
) {
  deleteInsulinInjection(id: $id) {
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
    "concreteType": "InsulinInjection2",
    "kind": "LinkedField",
    "name": "deleteInsulinInjection",
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
    "name": "DeleteInsulinInjectionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteInsulinInjectionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "92cae5da8676446aa9fc5b710e2fca30",
    "id": null,
    "metadata": {},
    "name": "DeleteInsulinInjectionMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteInsulinInjectionMutation(\n  $id: Float!\n) {\n  deleteInsulinInjection(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '268de050d6ebe954e04c5b9f2c58bcc6';

module.exports = node;
