/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UpdateMedicine_viewer$ref = any;
export type routesUpdateMedicineQueryVariables = {|
  id: number
|};
export type routesUpdateMedicineQueryResponse = {|
  +$fragmentRefs: UpdateMedicine_viewer$ref
|};
export type routesUpdateMedicineQuery = {|
  variables: routesUpdateMedicineQueryVariables,
  response: routesUpdateMedicineQueryResponse,
|};
*/


/*
query routesUpdateMedicineQuery(
  $id: Float!
) {
  ...UpdateMedicine_viewer
}

fragment UpdateMedicine_viewer on Query {
  drug(id: $id) {
    _id: id
    atc
    labelTitle
    labelSubTitle
    manufacturer
    dose
    delivery
    activeSubstance
    icon
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
    "name": "routesUpdateMedicineQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UpdateMedicine_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "routesUpdateMedicineQuery",
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
        "concreteType": "DrugWithRelations",
        "kind": "LinkedField",
        "name": "drug",
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
            "name": "atc",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "manufacturer",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dose",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "delivery",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "activeSubstance",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "icon",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5854bd9bd68ce1ec2077ff35c6dbf635",
    "id": null,
    "metadata": {},
    "name": "routesUpdateMedicineQuery",
    "operationKind": "query",
    "text": "query routesUpdateMedicineQuery(\n  $id: Float!\n) {\n  ...UpdateMedicine_viewer\n}\n\nfragment UpdateMedicine_viewer on Query {\n  drug(id: $id) {\n    _id: id\n    atc\n    labelTitle\n    labelSubTitle\n    manufacturer\n    dose\n    delivery\n    activeSubstance\n    icon\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8debd89acb48d625c8e51cc4eb5c170d';

module.exports = node;
