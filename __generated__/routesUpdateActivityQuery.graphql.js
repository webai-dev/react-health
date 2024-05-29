/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UpdateActivity_viewer$ref = any;
export type routesUpdateActivityQueryVariables = {|
  id: number
|};
export type routesUpdateActivityQueryResponse = {|
  +$fragmentRefs: UpdateActivity_viewer$ref
|};
export type routesUpdateActivityQuery = {|
  variables: routesUpdateActivityQueryVariables,
  response: routesUpdateActivityQueryResponse,
|};
*/


/*
query routesUpdateActivityQuery(
  $id: Float!
) {
  ...UpdateActivity_viewer
}

fragment UpdateActivity_viewer on Query {
  activity(id: $id) {
    _id: id
    met
    label
    type
    metMinute
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "routesUpdateActivityQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UpdateActivity_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "routesUpdateActivityQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "concreteType": "ActivityWithRelations",
        "kind": "LinkedField",
        "name": "activity",
        "plural": false,
        "selections": [
          {
            "alias": "_id",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "met",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "metMinute",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e4d03cd2f97baeff652b811134be24d",
    "id": null,
    "metadata": {},
    "name": "routesUpdateActivityQuery",
    "operationKind": "query",
    "text": "query routesUpdateActivityQuery(\n  $id: Float!\n) {\n  ...UpdateActivity_viewer\n}\n\nfragment UpdateActivity_viewer on Query {\n  activity(id: $id) {\n    _id: id\n    met\n    label\n    type\n    metMinute\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7529d14572e86f2addddefa13df5f6ee';

module.exports = node;
