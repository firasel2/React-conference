import { IIconStore } from './interface';
import ArrowUpRight from './sub-components/arrow-up-right';
import Marker from './sub-components/marker';

const IconStore = ({ iconName }: IIconStore) => {
  switch (iconName) {
    case 'Arrow Up Right': {
      return <ArrowUpRight />;
    }
    case 'Marker': {
      return <Marker />;
    }
    default:
      throw 'Icon not found!';
  }
};

export default IconStore;
