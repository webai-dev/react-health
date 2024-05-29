/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteDrugEntryMutationVariables = {|
  id: number
|};
export type DeleteDrugEntryMutationResponse = {|
  +deleteDrugEntry: ?{|
    +_id: ?number
  |}
|};
export type DeleteDrugEntryMutation = {|
  variables: DeleteDrugEntryMutationVariables,
  response: DeleteDrugEntryMutationResponse,
|};
*/


/*
mutation DeleteDrugEntryMutation(
  $id: Float!
) {
  deleteDrugEntry(id: $id) {
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
    "concreteType": "DrugEntry2",
    "kind": "LinkedField",
    "name": "deleteDrugEntry",
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
    "name": "DeleteDrugEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteDrugEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "808f1ef500932453fe8ff00d992b3657",
    "id": null,
    "metadata": {},
    "name": "DeleteDrugEntryMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteDrugEntryMutation(\n  $id: Float!\n) {\n  deleteDrugEntry(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1497fc73a6fce3f2a1630bffb96bd1b8';

module.exports = node;
