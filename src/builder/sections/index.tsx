import { sectionType } from './interface';
import { ErrorBoundary } from 'react-error-boundary';
import ConferencesSectionBuilder from './conferences';
import HeroSectionBuilder from './hero';
import OurSponsorSectionBuilder from './our-sponsor';
import SectionError from '@src/sections/section-error';
import SidebarSectionBuilder from './sidebar';
import OrganizerSectionBuilder from './organizer';
import SpeakerSectionBuilder from './speaker';
import ScheduleSectionBuilder from './schedule';

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
    case 'sidebar':
      return (
        <ErrorBoundary FallbackComponent={SectionError}>
          <SidebarSectionBuilder />
        </ErrorBoundary>
      );
    case 'organizer':
      return (
        <ErrorBoundary FallbackComponent={SectionError}>
          <OrganizerSectionBuilder />
        </ErrorBoundary>
      );
    case 'speaker':
      return (
        <ErrorBoundary FallbackComponent={SectionError}>
          <SpeakerSectionBuilder />
        </ErrorBoundary>
      );
    case 'schedule':
      return (
        <ErrorBoundary FallbackComponent={SectionError}>
          <ScheduleSectionBuilder />
        </ErrorBoundary>
      );
    default:
      return null;
  }
  return null;
};

export default SectionBuilder;
