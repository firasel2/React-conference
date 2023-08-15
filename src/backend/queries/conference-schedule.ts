import { gql } from '@apollo/client';

const CONFERENCE_SCHEDULE_QUERY = gql`
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

export { CONFERENCE_SCHEDULE_QUERY };
