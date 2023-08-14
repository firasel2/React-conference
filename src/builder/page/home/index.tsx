import SectionBuilder from '@src/builder/sections';
import React from 'react';

const HomePageBuilder = () => {
  return (
    <>
      <SectionBuilder sectionType="hero" />
      <SectionBuilder sectionType="conferences" />
      <SectionBuilder sectionType="our-sponsors" />
    </>
  );
};

export default HomePageBuilder;
