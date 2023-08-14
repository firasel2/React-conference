import React from 'react';
import { sectionType } from './interface';
import ConferencesSectionBuilder from './conferences';
import HeroSectionBuilder from './hero';
import OurSponsorSectionBuilder from './our-sponsor';
import { ErrorBoundary } from 'react-error-boundary';
import SectionError from '@src/sections/section-error';

const SectionBuilder = ({ sectionType }: { sectionType: sectionType }) => {
  switch (sectionType) {
    case 'conferences':
      return (
        <ErrorBoundary FallbackComponent={SectionError}>
          <ConferencesSectionBuilder />
        </ErrorBoundary>
      );
    case 'hero':
      return (
        <ErrorBoundary FallbackComponent={SectionError}>
          <HeroSectionBuilder />
        </ErrorBoundary>
      );
    case 'our-sponsors':
      return (
        <ErrorBoundary FallbackComponent={SectionError}>
          <OurSponsorSectionBuilder />
        </ErrorBoundary>
      );
    default:
      return null;
  }
  return null;
};

export default SectionBuilder;
