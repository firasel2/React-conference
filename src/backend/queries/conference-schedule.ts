import { gql } from '@apollo/client';

const CONFERENCES_SCHEDULE_QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      schedules {
        day
        intervals {
          sessions {
            title
            begin
            end
          }
        }
      }
    }
  }
`;

export { CONFERENCES_SCHEDULE_QUERY };
