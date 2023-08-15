import { gql } from '@apollo/client';

const CONFERENCES_DETAILS_QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
      organizer {
        name
        aboutShort
        image {
          url
          title
        }
      }
      speakers {
        name
        aboutShort
        image {
          url
          title
        }
        social {
          twitter
          github
          linkedin
          dribble
        }
      }
      schedules {
        day
        intervals {
          sessions {
            title
            begin
            end
            day
          }
        }
      }
      sponsors {
        name
        aboutShort
        image {
          url
          title
        }
      }
    }
  }
`;

export { CONFERENCES_DETAILS_QUERY };
