/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DrugPartialInput = {|
  activeSubstance?: ?string,
  atc?: ?string,
  delivery?: ?string,
  dose?: ?string,
  icon?: ?string,
  id?: ?number,
  labelSubTitle?: ?string,
  labelTitle?: ?string,
  manufacturer?: ?string,
|};
export type UpdateMedicineMutationVariables = {|
  id: number,
  input: DrugPartialInput,
|};
export type UpdateMedicineMutationResponse = {|
  +updateDrug: ?{|
    +_id: ?number
  |}
|};
export type UpdateMedicineMutation = {|
  variables: UpdateMedicineMutationVariables,
  response: UpdateMedicineMutationResponse,
|};
*/


/*
mutation UpdateMedicineMutation(
  $id: Float!
  $input: DrugPartialInput!
) {
  updateDrug(id: $id, drugPartialInput: $input) {
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
        "name": "drugPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "DrugWithRelations",
    "kind": "LinkedField",
    "name": "updateDrug",
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
    "name": "UpdateMedicineMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateMedicineMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "59a12f50d995a6c686196443105187f9",
    "id": null,
    "metadata": {},
    "name": "UpdateMedicineMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateMedicineMutation(\n  $id: Float!\n  $input: DrugPartialInput!\n) {\n  updateDrug(id: $id, drugPartialInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc204965ecbc37615864d957ba408dec';

module.exports = node;
