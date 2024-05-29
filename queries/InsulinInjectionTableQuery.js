import graphql from 'babel-plugin-relay/macro';

export const InsulinInjectionTableQuery = graphql`
  query InsulinInjectionTableQuery($filter: InsulinInjectionsFilterInput!, $totalCountCondition: JSON) {
    items: insulinInjections(insulinInjectionsFilter: $filter) {
      _id: id
      date
      dose
      fastActing
      longActing
    }
    totalCount: insulinInjectionsCount(where: $totalCountCondition) {
      count
    }
  }
`;
