import graphql from 'babel-plugin-relay/macro';

export const UserBaselineFormQuery = graphql`
  query UserBaselineFormQuery($id: Float!) {
    user(id: $id) {
      _id: id
    }
  }
`;