import { render, screen, fireEvent } from '@testing-library/react';

import { ControlComponent } from './index';

describe('pages | main | components', () => {
  const options = [
    { label: 'Some option 1', value: 'some-option-1' },
    { label: 'Some option-2', value: 'some-option-2' },
  ];

  describe('ControlComponent', () => {
  });

  test('should dispatch the onClickOption when prop is set', () => {
    const onClickMenuOption = jest.fn();
    const onChangeSearch = jest.fn();
    render(
      <ControlComponent
        menuOptions={options}
        menuOptionActive="some-option-1"
        onClickMenuOption={onClickMenuOption}
        onChangeSearch={onChangeSearch}
      />
      ,
    );
    fireEvent.click(screen.getByText(/Some option-2/i));
    expect(onClickMenuOption).toHaveBeenCalledWith('some-option-2');
    fireEvent.click(screen.getByText(/Some option-2/i));
    fireEvent.change(screen.getByTestId('search'), { target: { value: 'some text' } });
    expect(onChangeSearch).toHaveBeenCalledWith('some text');
  });
});
