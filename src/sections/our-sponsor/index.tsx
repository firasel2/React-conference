import Image from 'next/image';
import { IOurSponsor } from './interface';
import { twMerge } from 'tailwind-merge';
import ConferenceCard from '@components/card/conference';
import TimeLineStep from '@components/time-line-step';
import { useState } from 'react';
import SponsorList from '@components/sponsor-list';

const OurSponsor = ({ title, allSponsors }: IOurSponsor) => {
  const [confHoverId, setConfHoverId] = useState<string | undefined>();
  return (
    <section className="w-full">
      <div className="container">
        <div className="section-padding-primary flex flex-col items-center justify-center gap-16 md:gap-10">
          <h2 className=" text-2xl md:text-3xl font-bold text-black w-fit">
            {title}
          </h2>
          <div className="w-full flex flex-col gap-8">
            {allSponsors?.map((sponsors, i) => (
              <SponsorList
                key={i}
                title={sponsors.title}
                sponsors={sponsors.sponsors}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSponsor;
