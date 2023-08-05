import { IIconStore } from './interface';
import ArrowUpRight from './sub-components/arrow-up-right';
import Dribble from './sub-components/dribble';
import Github from './sub-components/github';
import LinkedIn from './sub-components/linkedin';
import Marker from './sub-components/marker';
import Storm from './sub-components/storm';
import TopBottomArrow from './sub-components/top-bottom-arrow';
import Twitter from './sub-components/twitter';

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
    case 'Top Bottom Arrow': {
      return <TopBottomArrow />;
    }
    case 'Twitter': {
      return <Twitter />;
    }
    case 'Linked In': {
      return <LinkedIn />;
    }
    case 'Dribble': {
      return <Dribble />;
    }
    case 'Github': {
      return <Github />;
    }
    default:
      throw 'Icon not found!';
  }
};

export default IconStore;
