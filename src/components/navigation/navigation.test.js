import { render, screen, fireEvent } from '@testing-library/react';

import { withTheme } from '../../__mocks__/withTheme';
import { Navigation } from './index';

describe('components | navigation', () => {
  const options = [
    { label: 'Some option 1', value: 'some-option-1' },
    { label: 'Some option-2', value: 'some-option-2' },
  ];

  test('should render the Navigation', () => {
    const { container } = render(withTheme(
      <Navigation
        options={options}
        onClickOption={jest.fn}
        active="some-option-1"
      />,
    ));
    expect(container).toMatchSnapshot();
  });

  test('should dispatch the onClickOption when prop is set', () => {
    const onClickOption = jest.fn();
    render(
      <Navigation
        options={options}
        onClickOption={onClickOption}
        active="some-option-1"
      />,
    );
    fireEvent.click(screen.getByText(/Some option-2/i));
    expect(onClickOption).toHaveBeenCalledWith('some-option-2');
  });
});
