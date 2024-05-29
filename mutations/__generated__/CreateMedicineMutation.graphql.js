/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewDrugInput = {|
  activeSubstance?: ?string,
  atc?: ?string,
  delivery?: ?string,
  dose?: ?string,
  icon?: ?string,
  labelSubTitle?: ?string,
  labelTitle?: ?string,
  manufacturer?: ?string,
|};
export type CreateMedicineMutationVariables = {|
  input: NewDrugInput
|};
export type CreateMedicineMutationResponse = {|
  +createDrug: ?{|
    +_id: ?number
  |}
|};
export type CreateMedicineMutation = {|
  variables: CreateMedicineMutationVariables,
  response: CreateMedicineMutationResponse,
|};
*/


/*
mutation CreateMedicineMutation(
  $input: NewDrugInput!
) {
  createDrug(newDrugInput: $input) {
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
        "name": "newDrugInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Drug",
    "kind": "LinkedField",
    "name": "createDrug",
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
    "name": "CreateMedicineMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateMedicineMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bcd39df0c1bdd218a4e2ffb90b3af10c",
    "id": null,
    "metadata": {},
    "name": "CreateMedicineMutation",
    "operationKind": "mutation",
    "text": "mutation CreateMedicineMutation(\n  $input: NewDrugInput!\n) {\n  createDrug(newDrugInput: $input) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f15ff80c1b769f2ad057b524be66f4ca';

module.exports = node;
