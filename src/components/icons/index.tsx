import { IIconStore } from './interface';
import ArrowUpRight from './sub-components/arrow-up-right';

const IconStore = ({ iconName }: IIconStore) => {
  switch (iconName) {
    case 'Arrow Up Right': {
      return <ArrowUpRight />;
    }
    default:
      throw 'Icon not found!';
  }
};

export default IconStore;
