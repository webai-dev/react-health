/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewInsulinInjectionInput = {|
  clock?: ?string,
  date: string,
  dose?: ?number,
  fastActing?: ?number,
  longActing?: ?number,
  userId?: ?number,
|};
export type CreateInsulinInjectionMutationVariables = {|
  input: NewInsulinInjectionInput
|};
export type CreateInsulinInjectionMutationResponse = {|
  +createInsulinInjection: ?{|
    +_id: ?number
  |}
|};
export type CreateInsulinInjectionMutation = {|
  variables: CreateInsulinInjectionMutationVariables,
  response: CreateInsulinInjectionMutationResponse,
|};
*/


/*
mutation CreateInsulinInjectionMutation(
  $input: NewInsulinInjectionInput!
) {
  createInsulinInjection(newInsulinInjectionInput: $input) {
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
        "name": "newInsulinInjectionInput",
        "variableName": "input"
      }
    ],
    "concreteType": "InsulinInjection",
    "kind": "LinkedField",
    "name": "createInsulinInjection",
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
    "name": "CreateInsulinInjectionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateInsulinInjectionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aeb71a495ccdeb75f5e9fd5c8ad73061",
    "id": null,
    "metadata": {},
    "name": "CreateInsulinInjectionMutation",
    "operationKind": "mutation",
    "text": "mutation CreateInsulinInjectionMutation(\n  $input: NewInsulinInjectionInput!\n) {\n  createInsulinInjection(newInsulinInjectionInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1b3e6948480fa17172cb30c01f165a38';

module.exports = node;
