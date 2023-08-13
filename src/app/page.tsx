import Conferences from '@src/sections/conferences';
import Hero from '@src/sections/hero';
import { heroProps } from '@src/sections/hero/mock-data';
import OurSponsor from '@src/sections/our-sponsor';
import { ourSponsorProps } from '@src/sections/our-sponsor/mock-data';

export default function Home() {
  return (
    <>
      <Hero {...heroProps} />
      <Conferences title="Conferences" />
      <OurSponsor {...ourSponsorProps} />
    </>
  );
}
