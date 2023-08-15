import { twMerge } from 'tailwind-merge';
import { ICtaButton } from './interface';
import IconStore from '@components/icons';
import CustomLink from '@components/costom-link';

const CtaButton = ({
  href,
  isOpenNewTab,
  className,
  prefetch,
  label,
  icon,
}: ICtaButton) => {
  return (
    <CustomLink
      href={href}
      isOpenNewTab={isOpenNewTab}
      prefetch={prefetch}
      className={twMerge(
        'w-fit min-h-[3.75rem] py-4 px-6 rounded-[1.875rem] bg-primary flex items-center justify-center overflow-hidden border-0 ',
        className
      )}
    >
      <span className="flex items-center justify-center flex-wrap gap-2 text-lg font-medium text-black">
        {label} {icon && <IconStore iconName={icon} />}
      </span>
    </CustomLink>
  );
};

export default CtaButton;
