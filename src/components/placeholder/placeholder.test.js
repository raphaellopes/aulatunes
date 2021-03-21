import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import { Placeholder } from './index';

describe('components | placeholder', () => {
  test('should render the Placeholder', () => {
    const { container } = render(withTheme(<Placeholder />));
    expect(container).toMatchSnapshot();
  });
});
