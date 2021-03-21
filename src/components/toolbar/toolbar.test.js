import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import { Toolbar } from './index';

describe('components | toolbar', () => {
  test('should render the Toolbar', () => {
    const { container } = render(withTheme(<Toolbar>Some text</Toolbar>));
    expect(container).toMatchSnapshot();
  });
});
