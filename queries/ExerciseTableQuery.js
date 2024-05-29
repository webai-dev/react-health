import graphql from 'babel-plugin-relay/macro';

export const ExerciseTableQuery = graphql`
  query ExerciseTableQuery($filter: ExercisesFilterInput!, $totalCountCondition: JSON) {
    items: exercises(exercisesFilter: $filter) {
      _id: id
      date
      intensiveExercise
      moderateExercise
      restingHeartRate
      source
      standing
      steps
    }
    totalCount: exercisesCount(where: $totalCountCondition) {
      count
    }
  }
`;
