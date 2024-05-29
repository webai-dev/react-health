/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteStepMutationVariables = {|
  id: number
|};
export type DeleteStepMutationResponse = {|
  +deleteStep: ?{|
    +_id: ?number
  |}
|};
export type DeleteStepMutation = {|
  variables: DeleteStepMutationVariables,
  response: DeleteStepMutationResponse,
|};
*/


/*
mutation DeleteStepMutation(
  $id: Float!
) {
  deleteStep(id: $id) {
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
    "concreteType": "Step2",
    "kind": "LinkedField",
    "name": "deleteStep",
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
    "name": "DeleteStepMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteStepMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5e5a23a7aca65e0f5e180d5e3eeed637",
    "id": null,
    "metadata": {},
    "name": "DeleteStepMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteStepMutation(\n  $id: Float!\n) {\n  deleteStep(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bdaafc44887d341754b2ff9782346b22';

module.exports = node;
