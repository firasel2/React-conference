import { IIconStore } from './interface';
import ArrowUpRight from './sub-components/arrow-up-right';
import Marker from './sub-components/marker';
import Storm from './sub-components/storm';

const IconStore = ({ iconName }: IIconStore) => {
  switch (iconName) {
    case 'Arrow Up Right': {
      return <ArrowUpRight />;
    }
    case 'Marker': {
      return <Marker />;
    }
    case 'Storm': {
      return <Storm />;
    }
    default:
      throw 'Icon not found!';
  }
};

export default IconStore;
