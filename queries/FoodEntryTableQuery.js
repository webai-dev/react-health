import graphql from 'babel-plugin-relay/macro';

export const FoodEntryTableQuery = graphql`
  query FoodEntryTableQuery($filter: FoodEntriesFilterInput!, $totalCountCondition: JSON) {
    items: foodEntries(foodEntriesFilter: $filter) {
      _id: id
      date
      entered
      foodId
      foodVariantId
      type
    }
    totalCount: foodEntriesCount(where: $totalCountCondition) {
      count
    }
    foods {
      _id: id
      label
    }
  }
`;
