/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NotesFilterInput = {|
  fields?: ?NoteFieldsInput,
  include?: ?$ReadOnlyArray<?NoteIncludeFilterListItemInput>,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type NoteFieldsInput = {|
  createdAt?: ?boolean,
  id?: ?boolean,
  text?: ?boolean,
  title?: ?boolean,
  updatedAt?: ?boolean,
  userId?: ?boolean,
|};
export type NoteIncludeFilterListItemInput = {|
  relation?: ?string,
  scope?: ?NoteScopeFilterInput,
|};
export type NoteScopeFilterInput = {|
  fields?: ?any,
  limit?: ?number,
  offset?: ?number,
  order?: ?$ReadOnlyArray<?string>,
  skip?: ?number,
  where?: ?any,
|};
export type NoteTableQueryVariables = {|
  filter: NotesFilterInput,
  totalCountCondition?: ?any,
|};
export type NoteTableQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +text: ?string,
    +title: string,
    +createdAt: ?string,
  |}>,
  +totalCount: ?{|
    +count: ?number
  |},
|};
export type NoteTableQuery = {|
  variables: NoteTableQueryVariables,
  response: NoteTableQueryResponse,
|};
*/


/*
query NoteTableQuery(
  $filter: NotesFilterInput!
  $totalCountCondition: JSON
) {
  items: notes(notesFilter: $filter) {
    _id: id
    text
    title
    createdAt
  }
  totalCount: notesCount(where: $totalCountCondition) {
    count
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "totalCountCondition"
  }
],
v1 = [
  {
    "alias": "items",
    "args": [
      {
        "kind": "Variable",
        "name": "notesFilter",
        "variableName": "filter"
      }
    ],
    "concreteType": "NoteWithRelations",
    "kind": "LinkedField",
    "name": "notes",
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
        "name": "text",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": "totalCount",
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "totalCountCondition"
      }
    ],
    "concreteType": "LoopbackCount",
    "kind": "LinkedField",
    "name": "notesCount",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
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
    "name": "NoteTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d9232f38b7589c309d29b1ef7c5c30ba",
    "id": null,
    "metadata": {},
    "name": "NoteTableQuery",
    "operationKind": "query",
    "text": "query NoteTableQuery(\n  $filter: NotesFilterInput!\n  $totalCountCondition: JSON\n) {\n  items: notes(notesFilter: $filter) {\n    _id: id\n    text\n    title\n    createdAt\n  }\n  totalCount: notesCount(where: $totalCountCondition) {\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ecc23693f62167b76c5cf95c7d78311f';

module.exports = node;
