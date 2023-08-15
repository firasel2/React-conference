import { gql } from '@apollo/client';

const CONFERENCES_SPEAKER_QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
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

export { CONFERENCES_SPEAKER_QUERY };
