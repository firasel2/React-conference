import { ISponsor } from './interface';
import Info from '@components/card/info';
import Image from 'next/image';
import InfoSkeleton from '@components/card/info/skeleton';

const Sponsor = ({ sponsors, isLoading }: ISponsor) => {
  return (
    <>
      {/* Sponsors data render */}
      {sponsors &&
        sponsors.length > 0 &&
        sponsors.map((sponsor, i) => (
          <Info key={i} {...sponsor} type="Sponsors" />
        ))}
      {/* No data */}
      {!sponsors ||
        (sponsors.length == 0 && !isLoading && (
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
          .map((_, i) => <InfoSkeleton key={i} type="Sponsors" />)}
    </>
  );
};

export default Sponsor;
