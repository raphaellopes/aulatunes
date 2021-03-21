import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import { Container, Section } from './index';

describe('components | layout', () => {
  test('should render the Container', () => {
    const { container } = render(withTheme(<Container>Some text</Container>));
    expect(container).toMatchSnapshot();
  });

  test('should render the Section', () => {
    const { container } = render(withTheme(
      <Section title="Some title">
        Some text
      </Section>,
    ));
    expect(container).toMatchSnapshot();
  });
});
