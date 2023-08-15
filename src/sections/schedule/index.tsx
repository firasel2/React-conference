import { ISchedule } from './interface';
import Info from '@components/card/info';
import Image from 'next/image';
import InfoSkeleton from '@components/card/info/skeleton';

const Schedule = ({ schedules, isLoading }: ISchedule) => {
  return (
    <>
      {/* Schedules data render */}
      {schedules &&
        schedules.length > 0 &&
        schedules.map((schedule, i) => (
          <Info key={i} {...schedule} type="Schedules" />
        ))}
      {/* No data */}
      {!schedules ||
        (schedules.length == 0 && !isLoading && (
          <Image
            className="mx-auto"
            width={300}
            height={300}
            src="https://res.cloudinary.com/dezqxmlny/image/upload/v1692037966/React%20Conference/no-data_gvd1h4.png"
            alt="no data"
          />
        ))}
      {/* Loading */}
      {isLoading &&
        Array(3)
          .fill('_')
          .map((_, i) => <InfoSkeleton key={i} type="Schedules" />)}
    </>
  );
};

export default Schedule;
