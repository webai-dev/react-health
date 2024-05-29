import graphql from 'babel-plugin-relay/macro';

export const KidneyTableQuery = graphql`
  query KidneyTableQuery($filter: KidneysFilterInput!, $totalCountCondition: JSON) {
    items: kidneys(kidneysFilter: $filter) {
      _id: id
      ualbkrea
      creatinine
      egfr
      date
    }
    totalCount: kidneysCount(where: $totalCountCondition) {
      count
    }
  }
`;