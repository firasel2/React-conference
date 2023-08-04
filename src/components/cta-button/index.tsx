import CustomLink from '../costom-link';
import { ICtaButton } from './interface';

const CtaButton = (props: ICtaButton) => {
  return <CustomLink {...props} />;
};

export default CtaButton;
