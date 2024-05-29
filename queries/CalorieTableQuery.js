import graphql from 'babel-plugin-relay/macro';

export const CalorieTableQuery = graphql`
  query CalorieTableQuery($filter: CaloriesFilterInput!, $totalCountCondition: JSON) {
    items: calories(caloriesFilter: $filter) {
      _id: id
      burned
      consumed
      carbohydrates
      protein
      fat
      waterConsumption
      date
    }
    totalCount: caloriesCount(where: $totalCountCondition) {
      count
    }
  }
`;
