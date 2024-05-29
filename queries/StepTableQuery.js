import graphql from 'babel-plugin-relay/macro';

export const StepTableQuery = graphql`
  query StepTableQuery($filter: StepsFilterInput!, $totalCountCondition: JSON) {
    items: steps(stepsFilter: $filter) {
      _id: id
      steps
      training
      restingHeartRate
      stressSmartWatch
      sleepSmartWatch
      date
    }
    totalCount: stepsCount(where: $totalCountCondition) {
      count
    }
  }
`;