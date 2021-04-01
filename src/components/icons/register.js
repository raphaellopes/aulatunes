import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCompactDisc, faMusic, faStar, faTimes,
} from '@fortawesome/free-solid-svg-icons';

export const registerIcons = () => {
  library.add(faCompactDisc, faMusic, faStar, faTimes);
};
