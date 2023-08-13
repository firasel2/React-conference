import { gql } from '@apollo/client';

const CONFERENCES_QUERY = gql`
  query Conferences {
    conferences {
      id
      name
      startDate
      slogan
    }
  }
`;

export { CONFERENCES_QUERY };
