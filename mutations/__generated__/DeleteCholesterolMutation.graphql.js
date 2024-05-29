/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCholesterolMutationVariables = {|
  id: number
|};
export type DeleteCholesterolMutationResponse = {|
  +deleteCholesterol: ?{|
    +_id: ?number
  |}
|};
export type DeleteCholesterolMutation = {|
  variables: DeleteCholesterolMutationVariables,
  response: DeleteCholesterolMutationResponse,
|};
*/


/*
mutation DeleteCholesterolMutation(
  $id: Float!
) {
  deleteCholesterol(id: $id) {
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
    "concreteType": "Cholesterol2",
    "kind": "LinkedField",
    "name": "deleteCholesterol",
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
    "name": "DeleteCholesterolMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteCholesterolMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7a91da5154c2b33d4e9053cd8e0615a5",
    "id": null,
    "metadata": {},
    "name": "DeleteCholesterolMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCholesterolMutation(\n  $id: Float!\n) {\n  deleteCholesterol(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5f72bddbd54bb5aa43d43c7cf92c127b';

module.exports = node;
