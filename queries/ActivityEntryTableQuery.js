import graphql from 'babel-plugin-relay/macro';

export const ActivityEntryTableQuery = graphql`
  query ActivityEntryTableQuery($filter: ActivityEntriesFilterInput!, $anthropometriesFilter: AnthropometriesFilterInput!, $totalCountCondition: JSON) {
    items: activityEntries(activityEntriesFilter: $filter) {
      _id: id
      activityId
      date
      time
      energy
      amountMinutes
    }
    anthropometries(anthropometriesFilter: $anthropometriesFilter) {
      _id: id
      weight
      date
    }
    activities {
      _id: id
      label
      type
      met
      metMinute
    }
    totalCount: activityEntriesCount(where: $totalCountCondition) {
      count
    }
  }
`;