/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ActivitiesFilterInput = {|
  fields?: ?FieldsInput,
  include?: ?$ReadOnlyArray<?IncludeListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type FieldsInput = {|
  id?: ?boolean,
  label?: ?boolean,
  met?: ?boolean,
  metMinute?: ?boolean,
  type?: ?boolean,
|};
export type IncludeListItemInput = {|
  relation?: ?string,
  scope?: ?ScopeInput,
|};
export type ScopeInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type SearchActivityQueryVariables = {|
  filter?: ?ActivitiesFilterInput
|};
export type SearchActivityQueryResponse = {|
  +activities: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +label: string,
  |}>
|};
export type SearchActivityQuery = {|
  variables: SearchActivityQueryVariables,
  response: SearchActivityQueryResponse,
|};
*/


/*
query SearchActivityQuery(
  $filter: ActivitiesFilterInput
) {
  activities(activitiesFilter: $filter) {
    _id: id
    label
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "activitiesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "ActivityWithRelations",
    "kind": "LinkedField",
    "name": "activities",
    "plural": true,
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
        "name": "label",
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
    "name": "SearchActivityQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchActivityQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "caaa1c1fa654279683843308f36356d5",
    "id": null,
    "metadata": {},
    "name": "SearchActivityQuery",
    "operationKind": "query",
    "text": "query SearchActivityQuery(\n  $filter: ActivitiesFilterInput\n) {\n  activities(activitiesFilter: $filter) {\n    _id: id\n    label\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '885b04e8cc849a7518b9b3aa99a74186';

module.exports = node;
