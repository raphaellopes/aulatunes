import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import {
  Title, Text, TextSubtitle, TextLabel,
} from './index';

describe('components | thypography', () => {
  const renderComponent = (Component, label) => {
    test(`should render the ${label}`, () => {
      const { container } = render(withTheme(Component));
      expect(container).toMatchSnapshot();
    });
  };

  renderComponent(<Title>Some text</Title>, 'Title');
  renderComponent(<Text>Some text</Text>, 'Text');
  renderComponent(<TextSubtitle>Some text</TextSubtitle>, 'TextSubtitle');
  renderComponent(<TextLabel>Some text</TextLabel>, 'TextLabel');
});
