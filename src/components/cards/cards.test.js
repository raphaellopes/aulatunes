import { render } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import {
  Card, CardContent, CardImage, CardTitle, CardSubtitle, CardLabel,
  CardRow, CardList,
} from './index';
import {
  CardPlaceholder, CardImagePlaceholder, CardTitlePlaceholder, CardSubtitlePlaceholder,
} from './placeholder';

describe('components | cards', () => {
  const renderComponent = (Component, label) => {
    test(`should render the ${label}`, () => {
      const { container } = render(withTheme(Component));
      expect(container).toMatchSnapshot();
    });
  };

  renderComponent(<Card>Some text</Card>, 'Card');
  renderComponent(<Card variant="secondary">Some text</Card>, 'Card with secondary variant');
  renderComponent(<Card onClick={jest.fn}>Some text</Card>, 'Card with cursor');
  renderComponent(<CardContent>Some text</CardContent>, 'CardContent');
  renderComponent(<CardImage src="http://some-image" alt="some text" />, 'CardImage');
  renderComponent(<CardTitle>Some text</CardTitle>, 'CardTitle');
  renderComponent(<CardSubtitle>Some text</CardSubtitle>, 'CardSubtitle');
  renderComponent(<CardLabel>Some text</CardLabel>, 'CardLabel');
  renderComponent(<CardRow>Some text</CardRow>, 'CardRow');
  renderComponent(<CardList>Some text</CardList>, 'CardList');
  renderComponent(<CardPlaceholder />, 'CardPlaceholder');
  renderComponent(<CardImagePlaceholder />, 'CardImagePlaceholder');
  renderComponent(<CardTitlePlaceholder />, 'CardTitlePlaceholder');
  renderComponent(<CardSubtitlePlaceholder />, 'CardSubtitlePlaceholder');
});
