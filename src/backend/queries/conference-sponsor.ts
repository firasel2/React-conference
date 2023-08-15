import { gql } from '@apollo/client';

const CONFERENCE_SPONSOR_QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      id
      sponsors {
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

export { CONFERENCE_SPONSOR_QUERY };
