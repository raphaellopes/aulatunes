import { library } from '@fortawesome/fontawesome-svg-core';
import { faCompactDisc, faMusic, faStar } from '@fortawesome/free-solid-svg-icons';

export const registerIcons = () => {
  library.add(faCompactDisc, faMusic, faStar);
};
