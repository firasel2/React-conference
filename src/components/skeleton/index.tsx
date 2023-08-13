import { twMerge } from 'tailwind-merge';

export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('animate-pulse bg-gray-light', className)}
      {...props}
    />
  );
}
