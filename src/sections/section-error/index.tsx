'use client';

const SectionError = ({ error }: { error: Error }) => {
  return (
    <div className="container section-padding-primary text-center text-2xl font-semibold text-[#ff0000]">
      {error.message
        ? error.message
        : 'Oops, something went wrong. Please try again.'}
    </div>
  );
};

export default SectionError;
