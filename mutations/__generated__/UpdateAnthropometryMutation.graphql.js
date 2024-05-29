/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AnthropometryPartialInput = {|
  arms?: ?number,
  bmi?: ?number,
  chest?: ?number,
  date?: ?string,
  height?: ?number,
  id?: ?number,
  userId?: ?number,
  waist?: ?number,
  weight?: ?number,
|};
export type UpdateAnthropometryMutationVariables = {|
  id: number,
  input: AnthropometryPartialInput,
|};
export type UpdateAnthropometryMutationResponse = {|
  +updateAnthropometry: ?{|
    +id: ?number
  |}
|};
export type UpdateAnthropometryMutation = {|
  variables: UpdateAnthropometryMutationVariables,
  response: UpdateAnthropometryMutationResponse,
|};
*/


/*
mutation UpdateAnthropometryMutation(
  $id: Float!
  $input: AnthropometryPartialInput!
) {
  updateAnthropometry(id: $id, anthropometryPartialInput: $input) {
    id
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
        "name": "anthropometryPartialInput",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "AnthropometryPartial",
    "kind": "LinkedField",
    "name": "updateAnthropometry",
    "plural": false,
    "selections": [
      {
        "alias": null,
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
    "name": "UpdateAnthropometryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateAnthropometryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9e4d3945827d5a8093bb2b3df4c7502b",
    "id": null,
    "metadata": {},
    "name": "UpdateAnthropometryMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateAnthropometryMutation(\n  $id: Float!\n  $input: AnthropometryPartialInput!\n) {\n  updateAnthropometry(id: $id, anthropometryPartialInput: $input) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '00ba9a870e39160568d809b67412a175';

module.exports = node;
