/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DrugsFilterInput = {|
  fields?: ?DrugFieldsInput,
  include?: ?$ReadOnlyArray<?DrugIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type DrugFieldsInput = {|
  activeSubstance?: ?boolean,
  atc?: ?boolean,
  delivery?: ?boolean,
  dose?: ?boolean,
  icon?: ?boolean,
  id?: ?boolean,
  labelSubTitle?: ?boolean,
  labelTitle?: ?boolean,
  manufacturer?: ?boolean,
|};
export type DrugIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?DrugScopeFilterInput,
|};
export type DrugScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type SearchDrugQueryVariables = {|
  filter?: ?DrugsFilterInput
|};
export type SearchDrugQueryResponse = {|
  +drugs: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +labelTitle: ?string,
    +labelSubTitle: ?string,
  |}>
|};
export type SearchDrugQuery = {|
  variables: SearchDrugQueryVariables,
  response: SearchDrugQueryResponse,
|};
*/


/*
query SearchDrugQuery(
  $filter: DrugsFilterInput
) {
  drugs(drugsFilter: $filter) {
    _id: id
    labelTitle
    labelSubTitle
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
        "name": "drugsFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "DrugWithRelations",
    "kind": "LinkedField",
    "name": "drugs",
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
        "name": "labelTitle",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "labelSubTitle",
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
    "name": "SearchDrugQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchDrugQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b885ba1de9f78c0eb9075371d5887d70",
    "id": null,
    "metadata": {},
    "name": "SearchDrugQuery",
    "operationKind": "query",
    "text": "query SearchDrugQuery(\n  $filter: DrugsFilterInput\n) {\n  drugs(drugsFilter: $filter) {\n    _id: id\n    labelTitle\n    labelSubTitle\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a4af91fa3add55c0f3eade26e69aa203';

module.exports = node;
