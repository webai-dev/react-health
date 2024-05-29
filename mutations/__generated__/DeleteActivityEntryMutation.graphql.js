/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteActivityEntryMutationVariables = {|
  id: number
|};
export type DeleteActivityEntryMutationResponse = {|
  +deleteActivityEntry: ?{|
    +_id: ?number
  |}
|};
export type DeleteActivityEntryMutation = {|
  variables: DeleteActivityEntryMutationVariables,
  response: DeleteActivityEntryMutationResponse,
|};
*/


/*
mutation DeleteActivityEntryMutation(
  $id: Float!
) {
  deleteActivityEntry(id: $id) {
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
    "concreteType": "ActivityEntry2",
    "kind": "LinkedField",
    "name": "deleteActivityEntry",
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
    "name": "DeleteActivityEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteActivityEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1765762dfd9f74d93e0bc01608e705b1",
    "id": null,
    "metadata": {},
    "name": "DeleteActivityEntryMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteActivityEntryMutation(\n  $id: Float!\n) {\n  deleteActivityEntry(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '43cecab5ecdfafdf413d6a4226fb89b9';

module.exports = node;
