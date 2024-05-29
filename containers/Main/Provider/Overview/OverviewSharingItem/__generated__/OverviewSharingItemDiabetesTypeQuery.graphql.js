/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DiabetesFilterInput = {|
  fields?: ?DiabetesFieldsInput,
  include?: ?$ReadOnlyArray<?DiabetesIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DiabetesFieldsInput = {|
  date?: ?boolean,
  diabetesStatus?: ?boolean,
  id?: ?boolean,
  userId?: ?boolean,
|};
export type DiabetesIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?DiabetesScopeFilterInput,
|};
export type DiabetesScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type OverviewSharingItemDiabetesTypeQueryVariables = {|
  diabetesFilter?: ?DiabetesFilterInput
|};
export type OverviewSharingItemDiabetesTypeQueryResponse = {|
  +diabetes: ?$ReadOnlyArray<?{|
    +diabetesStatus: number
  |}>
|};
export type OverviewSharingItemDiabetesTypeQuery = {|
  variables: OverviewSharingItemDiabetesTypeQueryVariables,
  response: OverviewSharingItemDiabetesTypeQueryResponse,
|};
*/


/*
query OverviewSharingItemDiabetesTypeQuery(
  $diabetesFilter: DiabetesFilterInput
) {
  diabetes(diabetesFilter: $diabetesFilter) {
    diabetesStatus
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "diabetesFilter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "diabetesFilter",
        "variableName": "diabetesFilter"
      }
    ],
    "concreteType": "DiabetesWithRelations",
    "kind": "LinkedField",
    "name": "diabetes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "diabetesStatus",
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
    "name": "OverviewSharingItemDiabetesTypeQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OverviewSharingItemDiabetesTypeQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7d8976ff94f03866be1cc6e8765b6493",
    "id": null,
    "metadata": {},
    "name": "OverviewSharingItemDiabetesTypeQuery",
    "operationKind": "query",
    "text": "query OverviewSharingItemDiabetesTypeQuery(\n  $diabetesFilter: DiabetesFilterInput\n) {\n  diabetes(diabetesFilter: $diabetesFilter) {\n    diabetesStatus\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '166105b2978ef9bd83c438a55a5ea581';

module.exports = node;
