import { useSortable } from '@dnd-kit/sortable';
import { ISortableItem } from './interface';

export default function SortableItem({ id, children }: ISortableItem) {
  const { setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform:
      transform != null ? `translate3d(0, ${transform.y}px, 0)` : undefined,
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
