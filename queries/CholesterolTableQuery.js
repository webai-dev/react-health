import graphql from 'babel-plugin-relay/macro';

export const CholesterolTableQuery = graphql`
  query CholesterolTableQuery($filter: CholesterolsFilterInput!, $totalCountCondition: JSON) {
    items: cholesterols(cholesterolsFilter: $filter) {
      _id: id
      date
      hdlChol
      ldlChol
      totalChol
      triglycerides
    }
    totalCount: cholesterolsCount(where: $totalCountCondition) {
      count
    }
  }
`;
