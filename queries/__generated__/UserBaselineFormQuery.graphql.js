/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserBaselineFormQueryVariables = {|
  id: number
|};
export type UserBaselineFormQueryResponse = {|
  +user: ?{|
    +_id: ?number
  |}
|};
export type UserBaselineFormQuery = {|
  variables: UserBaselineFormQueryVariables,
  response: UserBaselineFormQueryResponse,
|};
*/


/*
query UserBaselineFormQuery(
  $id: Float!
) {
  user(id: $id) {
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
    "concreteType": "UserWithRelations",
    "kind": "LinkedField",
    "name": "user",
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
    "name": "UserBaselineFormQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserBaselineFormQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "35282c49e33eb8eb472871948a6855f9",
    "id": null,
    "metadata": {},
    "name": "UserBaselineFormQuery",
    "operationKind": "query",
    "text": "query UserBaselineFormQuery(\n  $id: Float!\n) {\n  user(id: $id) {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '433c54151cbe1d0c7f2786f469864194';

module.exports = node;
