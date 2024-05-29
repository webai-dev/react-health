import graphql from 'babel-plugin-relay/macro';

export const GlucoseManualTableQuery = graphql`
  query GlucoseManualTableQuery($filter: GlucoseManualsFilterInput!, $totalCountCondition: JSON) {
    items: glucoseManuals(glucoseManualsFilter: $filter) {
      _id: id
      date
      glucoseABreakfast
      glucoseADinner
      glucoseALunch
      glucoseBBreakfast
      glucoseBDinner
      glucoseBLunch
      glucoseFasting
      glucoseRandom
    }
    totalCount: glucoseManualsCount(where: $totalCountCondition) {
      count
    }
  }
`;
