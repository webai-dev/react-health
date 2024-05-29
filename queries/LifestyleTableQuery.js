import graphql from 'babel-plugin-relay/macro';

export const LifestyleTableQuery = graphql`
  query LifestyleTableQuery($filter: LifestylesFilterInput!, $totalCountCondition: JSON) {
    items: lifestyles(lifestylesFilter: $filter) {
      _id: id
      date
      dietType
      exerciseLevel
      smoking
    }
    totalCount: lifestylesCount(where: $totalCountCondition) {
      count
    }
  }
`;
