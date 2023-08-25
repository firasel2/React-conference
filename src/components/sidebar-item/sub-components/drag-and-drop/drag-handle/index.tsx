import { twMerge } from 'tailwind-merge';
import { useSortable } from '@dnd-kit/sortable';
import { IDragHandle } from './interface';

export default function DragHandle({ id, children, className }: IDragHandle) {
  const { listeners, setDraggableNodeRef } = useSortable({ id });

  return (
    <button
      aria-label="drag-handle"
      className={twMerge(
        'cursor-ns-resize focus:shadow-none focus:outline-none focus-visible:shadow-none focus-visible:outline-none',
        className
      )}
      {...listeners}
      ref={setDraggableNodeRef}
      type="button"
    >
      {children}
    </button>
  );
}
