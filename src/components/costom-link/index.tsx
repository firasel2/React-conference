import Link from 'next/link';
import { ICustomLink } from './interface';

const CustomLink = (props: ICustomLink) => {
  const { href, isOpenNewTab, className, prefetch } = props;

  return (
    <Link
      href={href}
      target={isOpenNewTab ? '_blank' : '_self'}
      className={className || ''}
      prefetch={prefetch}
    >
      {'label' in props ? props.label : props.children}
    </Link>
  );
};

export default CustomLink;
