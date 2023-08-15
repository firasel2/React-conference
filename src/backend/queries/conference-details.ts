import { gql } from '@apollo/client';

const CONFERENCE_DETAILS_QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
    }
  }
`;

export { CONFERENCE_DETAILS_QUERY };
