import { gql } from '@apollo/client';

const CONFERENCE_ORGANIZER_QUERY = gql`
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

export { CONFERENCE_ORGANIZER_QUERY };
