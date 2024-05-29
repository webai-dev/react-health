/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InsulinInjectionsPartialInput = {|
  clock?: ?string,
  date?: ?string,
  dose?: ?number,
  fastActing?: ?number,
  id?: ?number,
  longActing?: ?number,
  userId?: ?number,
|};
export type UpdateInsulinInjectionMutationVariables = {|
  id: number,
  input: InsulinInjectionsPartialInput,
|};
export type UpdateInsulinInjectionMutationResponse = {|
  +updateInsulinInjection: ?{|
    +_id: ?number
  |}
|};
export type UpdateInsulinInjectionMutation = {|
  variables: UpdateInsulinInjectionMutationVariables,
  response: UpdateInsulinInjectionMutationResponse,
|};
*/


/*
mutation UpdateInsulinInjectionMutation(
  $id: Float!
  $input: InsulinInjectionsPartialInput!
) {
  updateInsulinInjection(id: $id, insulinInjectionsPartialInput: $input) {
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
        "name": "insulinInjectionsPartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "InsulinInjectionsWithRelations",
    "kind": "LinkedField",
    "name": "updateInsulinInjection",
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
    "name": "UpdateInsulinInjectionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateInsulinInjectionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "24efa5af567eacc25f9cea1e8adbce45",
    "id": null,
    "metadata": {},
    "name": "UpdateInsulinInjectionMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateInsulinInjectionMutation(\n  $id: Float!\n  $input: InsulinInjectionsPartialInput!\n) {\n  updateInsulinInjection(id: $id, insulinInjectionsPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e47f3b12b939b54d0a630fca40bde50b';

module.exports = node;
