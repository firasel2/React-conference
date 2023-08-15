import { ISpeaker } from './interface';
import Info from '@components/card/info';
import Image from 'next/image';
import InfoSkeleton from '@components/card/info/skeleton';

const Speaker = ({ speakers, isLoading }: ISpeaker) => {
  return (
    <>
      {/* Speakers data render */}
      {speakers &&
        speakers.length > 0 &&
        speakers.map((speaker, i) => (
          <Info key={i} {...speaker} type="Speakers" />
        ))}
      {/* No data */}
      {!speakers ||
        (speakers.length == 0 && !isLoading && (
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
          .map((_, i) => <InfoSkeleton key={i} type="Speakers" />)}
    </>
  );
};

export default Speaker;
