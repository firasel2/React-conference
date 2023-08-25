import React from 'react';
import { ISidebarItem } from './interface';
import Link from 'next/link';
import IconStore from '@components/icons';
import { twMerge } from 'tailwind-merge';
import DragHandle from './sub-components/drag-and-drop/drag-handle';
import SortableItem from './sub-components/drag-and-drop/sortable-item';

const SidebarItem = ({ id, title, active, href, icon }: ISidebarItem) => {
  return (
    <div className="relative">
      <SortableItem id={id}>
        {icon && (
          <DragHandle
            id={id}
            className="absolute m-[0.5rem]  w-[3.5rem] aspect-square rounded-lg p-4 bg-primary-thin flex items-center justify-center"
          >
            <IconStore iconName={icon} />
          </DragHandle>
        )}

        <Link href={href} prefetch={true} data-no-dnd="true">
          <div
            className={twMerge(
              'w-full md:min-w-[22rem] p-[0.5rem] pl-[6.44rem] md:pl-[6.81rem] rounded-lg border-[1px] border-solid border-gray/20 flex flex-wrap items-center gap-y-4 gap-x-[2.44rem] md:gap-x-[2.81rem]',
              active && 'bg-primary shadow-1 border-primary'
            )}
          >
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
      </SortableItem>
    </div>
  );
};

export default SidebarItem;
