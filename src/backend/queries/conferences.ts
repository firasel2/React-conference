import { gql } from '@apollo/client';

const CONFERENCES_QUERY = gql`
  query Conferences {
    conferences {
      id
      name
      organizer {
        name
      }
      year
      locations {
        name
      }
    }
  }
`;

export { CONFERENCES_QUERY };
