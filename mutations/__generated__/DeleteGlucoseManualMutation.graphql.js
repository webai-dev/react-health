/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteGlucoseManualMutationVariables = {|
  id: number
|};
export type DeleteGlucoseManualMutationResponse = {|
  +deleteGlucoseManual: ?{|
    +_id: ?number
  |}
|};
export type DeleteGlucoseManualMutation = {|
  variables: DeleteGlucoseManualMutationVariables,
  response: DeleteGlucoseManualMutationResponse,
|};
*/


/*
mutation DeleteGlucoseManualMutation(
  $id: Float!
) {
  deleteGlucoseManual(id: $id) {
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
    "concreteType": "GlucoseManual2",
    "kind": "LinkedField",
    "name": "deleteGlucoseManual",
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
    "name": "DeleteGlucoseManualMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteGlucoseManualMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1da865ad6aac6ed2874d25e8d4871ce8",
    "id": null,
    "metadata": {},
    "name": "DeleteGlucoseManualMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteGlucoseManualMutation(\n  $id: Float!\n) {\n  deleteGlucoseManual(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dafaffb20c633a10590871dada680c4b';

module.exports = node;
