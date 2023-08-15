import { gql } from '@apollo/client';

const CONFERENCES_ORGANIZER_QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      organizers {
        title: name
        subTitle: aboutShort
        image {
          url
          alt: title
        }
      }
    }
  }
`;

export { CONFERENCES_ORGANIZER_QUERY };
