import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'util/renderWithTheme';
import { Form } from '@unform/web';

import Input from '.';

describe('Input', () => {
  it('should be able render Input correctly', () => {
    const { container } = renderWithTheme(
      <Form
        onSubmit={() => {
          jest.fn();
        }}
      >
        <Input name="email" type="text" placeholder="Usuario ou Email" />
      </Form>,
    );

    const input = screen.getByRole('textbox');

    userEvent.click(input);

    expect(input).toHaveFocus();
    expect(input.parentElement).toHaveStyleRule('width', '34.8rem', {
      modifier: ':focus-within',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
