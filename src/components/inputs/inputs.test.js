import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import { Input } from './index';

describe('components | inputs', () => {
  test('should render the Input default', () => {
    const { container } = render(withTheme(<Input />));
    expect(container).toMatchSnapshot();
  });
});
