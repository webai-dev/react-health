import graphql from 'babel-plugin-relay/macro';

export const UserFormQuery = graphql`
  query UserFormQuery($id: Float!) {
    user(id: $id) {
      firstName
      lastName
      email
      birthDate
      cellPhone
    }
  }
`;