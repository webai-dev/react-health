/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyAccount_viewer$ref: FragmentReference;
declare export opaque type MyAccount_viewer$fragmentType: MyAccount_viewer$ref;
export type MyAccount_viewer = {|
  +viewer: ?{|
    +_id: ?number,
    +email: string,
    +firstName: string,
    +lastName: string,
    +cellPhone: ?string,
    +sharers: ?$ReadOnlyArray<?{|
      +_id: ?number,
      +dateStarted: ?string,
    |}>,
  |},
  +$refType: MyAccount_viewer$ref,
|};
export type MyAccount_viewer$data = MyAccount_viewer;
export type MyAccount_viewer$key = {
  +$data?: MyAccount_viewer$data,
  +$fragmentRefs: MyAccount_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "filter"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccount_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "viewerFilter",
          "variableName": "filter"
        }
      ],
      "concreteType": "UserWithRelations",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "firstName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lastName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cellPhone",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SharingWithRelations",
          "kind": "LinkedField",
          "name": "sharers",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "dateStarted",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1391fa2c370b5b0f8bcc68152f8bf2a';

module.exports = node;
