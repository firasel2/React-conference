import { gql } from '@apollo/client';

const CONFERENCE_SPEAKER_QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      id
      speakers {
        title: name
        subTitle: aboutShort
        image {
          url
          alt: title
        }
        socialLinks: social {
          twitter
          github
          linkedin
          dribble
        }
      }
    }
  }
`;

export { CONFERENCE_SPEAKER_QUERY };
