import graphql from 'babel-plugin-relay/macro';

export const DiabetesTableQuery = graphql`
  query DiabetesTableQuery($filter: DiabetesFilterInput!, $totalCountCondition: JSON) {
    items: diabetes(diabetesFilter: $filter) {
      _id: id
      date
      diabetesStatus
    }
    totalCount: diabetesCount(where: $totalCountCondition) {
      count
    }
  }
`;
