'use client';

import SidebarItem from '@components/sidebar-item';
import { Fragment } from 'react';
import { ISidebar } from './interface';
import { usePathname } from 'next/navigation';
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

const Sidebar = ({ sidebarItems, setSidebarItems, children }: ISidebar) => {
  const pathName = usePathname();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (over && active.id !== over?.id) {
      const activeIndex = sidebarItems.findIndex(({ id }) => id === active.id);
      const overIndex = sidebarItems.findIndex(({ id }) => id === over.id);

      const sortedSidebarItems = arrayMove(
        sidebarItems,
        activeIndex,
        overIndex
      );

      setSidebarItems(sortedSidebarItems);
    }
  }

  return (
    <section className="flex flex-col gap-5 md:gap-8 w-full lg:w-auto">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={sidebarItems}>
          {sidebarItems.length > 0 &&
            sidebarItems.map((sidebarItem) => {
              const isActive = sidebarItem.activeKey
                ? pathName.includes(sidebarItem.activeKey)
                : false;

              return (
                <Fragment key={sidebarItem.id}>
                  <SidebarItem {...sidebarItem} active={isActive} />
                  {children && isActive && children}
                </Fragment>
              );
            })}
        </SortableContext>
      </DndContext>
    </section>
  );
};

export default Sidebar;
