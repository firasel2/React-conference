import React from 'react';
import { sectionType } from './interface';
import ConferencesSectionBuilder from './conferences';
import HeroSectionBuilder from './hero';
import OurSponsorSectionBuilder from './our-sponsor';

const SectionBuilder = ({ sectionType }: { sectionType: sectionType }) => {
  switch (sectionType) {
    case 'conferences':
      return <ConferencesSectionBuilder />;
    case 'hero':
      return <HeroSectionBuilder />;
    case 'our-sponsors':
      return <OurSponsorSectionBuilder />;
    default:
      return null;
  }
  return null;
};

export default SectionBuilder;
