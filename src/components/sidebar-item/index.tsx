import React from 'react';
import { ISidebarItem } from './interface';
import Link from 'next/link';
import IconStore from '@components/icons';
import { twMerge } from 'tailwind-merge';

const SidebarItem = ({ title, active, href, icon }: ISidebarItem) => {
  return (
    <Link href={href} prefetch={true}>
      <div
        className={twMerge(
          'w-full md:min-w-[22rem] p-[0.5rem] rounded-lg border-[1px] border-solid border-gray/20 flex flex-wrap items-center gap-y-4 gap-x-[2.44rem] md:gap-x-[2.81rem]',
          active && 'bg-primary shadow-1 border-primary'
        )}
      >
        {icon && (
          <div className="w-[3.5rem] aspect-square rounded-lg p-4 bg-primary-thin flex items-center justify-center">
            <IconStore iconName={icon} />
          </div>
        )}
        <span
          className={twMerge(
            'block text-black text-xl font-bold py-4',
            active && 'text-white'
          )}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};

export default SidebarItem;
