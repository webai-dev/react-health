/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type KidneyPartialInput = {|
  creatinine?: ?number,
  date?: ?string,
  egfr?: ?number,
  id?: ?number,
  ualbkrea?: ?number,
  userId?: ?number,
|};
export type UpdateKidneyMutationVariables = {|
  id: number,
  input: KidneyPartialInput,
|};
export type UpdateKidneyMutationResponse = {|
  +updateKidney: ?{|
    +_id: ?number
  |}
|};
export type UpdateKidneyMutation = {|
  variables: UpdateKidneyMutationVariables,
  response: UpdateKidneyMutationResponse,
|};
*/


/*
mutation UpdateKidneyMutation(
  $id: Float!
  $input: KidneyPartialInput!
) {
  updateKidney(id: $id, kidneyPartialInput: $input) {
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
        "name": "kidneyPartialInput",
        "variableName": "input"
      }
    ],
    "concreteType": "KidneyWithRelations",
    "kind": "LinkedField",
    "name": "updateKidney",
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
    "name": "UpdateKidneyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateKidneyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "514fe30a8105df89cfabc3d335289422",
    "id": null,
    "metadata": {},
    "name": "UpdateKidneyMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateKidneyMutation(\n  $id: Float!\n  $input: KidneyPartialInput!\n) {\n  updateKidney(id: $id, kidneyPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '92b397927a8db356f93ba3ce5065ecc9';

module.exports = node;
