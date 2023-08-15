export interface IConferenceScheduleData {
  conference: {
    schedules: {
      day: string;
      intervals: {
        sessions: {
          title: string;
          begin: string;
          end: string;
        }[];
      }[];
    }[];
  };
}
