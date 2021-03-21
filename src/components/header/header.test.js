import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import { Header } from './index';

describe('components | header', () => {
  test('should render the Header', () => {
    const { container } = render(withTheme(<Header />));
    expect(container).toMatchSnapshot();
  });
});
