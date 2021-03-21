import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import { Button } from './index';

describe('components | buttons', () => {
  test('should render the Button default', () => {
    const { container } = render(withTheme(<Button>Some text</Button>));
    expect(container).toMatchSnapshot();
  });

  test('should render the Button with variant primary', () => {
    const { container } = render(withTheme(<Button variant="primary">Some text</Button>));
    expect(container).toMatchSnapshot();
  });

  test('should render the cursor ponter when prop onClick is set', () => {
    const { container } = render(withTheme(<Button onClick={jest.fn}>Some text</Button>));
    expect(container).toMatchSnapshot();
  });
});
