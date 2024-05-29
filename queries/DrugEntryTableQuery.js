import graphql from 'babel-plugin-relay/macro';

export const DrugEntryTableQuery = graphql`
  query DrugEntryTableQuery($filter: DrugEntriesFilterInput!, $totalCountCondition: JSON) {
    items: drugEntries(drugEntriesFilter: $filter) {
      _id: id
      drugId
      comment
      dateStarted
      onDemand
      pushNotice
    }
    totalCount: drugEntriesCount(where: $totalCountCondition) {
      count
    }
    drugs {
      _id: id
      labelSubTitle
    }
  }
`;
