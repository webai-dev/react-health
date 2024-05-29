import graphql from 'babel-plugin-relay/macro';

export const BloodPressureTableQuery = graphql`
  query BloodPressureTableQuery($filter: BloodPressuresFilterInput!, $totalCountCondition: JSON) {
    items: bloodPressures(bloodPressuresFilter: $filter) {
      _id: id
      systolic
      diastolic
      date
    }
    totalCount: bloodPressuresCount(where: $totalCountCondition) {
      count
    }
  }
`;