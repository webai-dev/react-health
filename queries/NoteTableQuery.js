import graphql from 'babel-plugin-relay/macro';

export const NoteTableQuery = graphql`
  query NoteTableQuery($filter: NotesFilterInput!, $totalCountCondition: JSON) {
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
`;
