import graphql from 'babel-plugin-relay/macro';

export const AnthropometryTableQuery = graphql`
  query AnthropometryTableQuery($filter: AnthropometriesFilterInput!, $totalCountCondition: JSON) {
    items: anthropometries(anthropometriesFilter: $filter) {
      _id: id
      date
      height
      waist
      weight
      arms
      chest
    }
    totalCount: anthropometriesCount(where: $totalCountCondition) {
      count
    }
  }
`;
