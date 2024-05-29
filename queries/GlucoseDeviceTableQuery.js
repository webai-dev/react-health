import graphql from 'babel-plugin-relay/macro';

export const GlucoseDeviceTableQuery = graphql`
  query GlucoseDeviceTableQuery($filter: GlucoseDevicesFilterInput!, $totalCountCondition: JSON) {
    items: glucoseDevices(glucoseDevicesFilter: $filter) {
      _id: id
      date
      glucose
    }
    totalCount: glucoseDevicesCount(where: $totalCountCondition) {
      count
    }
  }
`;
