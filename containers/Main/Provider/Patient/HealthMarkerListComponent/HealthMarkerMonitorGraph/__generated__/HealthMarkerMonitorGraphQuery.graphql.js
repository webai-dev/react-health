/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HealthMarkerMonitorGraphQueryVariables = {||};
export type HealthMarkerMonitorGraphQueryResponse = {|
  +viewer: ?{|
    +_id: ?number
  |}
|};
export type HealthMarkerMonitorGraphQuery = {|
  variables: HealthMarkerMonitorGraphQueryVariables,
  response: HealthMarkerMonitorGraphQueryResponse,
|};
*/


/*
query HealthMarkerMonitorGraphQuery {
  viewer {
    _id: id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserWithRelations",
    "kind": "LinkedField",
    "name": "viewer",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HealthMarkerMonitorGraphQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HealthMarkerMonitorGraphQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ab856d80af42c156fb6854d67e4273b1",
    "id": null,
    "metadata": {},
    "name": "HealthMarkerMonitorGraphQuery",
    "operationKind": "query",
    "text": "query HealthMarkerMonitorGraphQuery {\n  viewer {\n    _id: id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '528cb4a12810c8dfdce3f36f7d608ce2';

module.exports = node;
