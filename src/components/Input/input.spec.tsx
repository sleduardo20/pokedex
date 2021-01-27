import { screen } from '@testing-library/react';

import { renderWithTheme } from 'util/renderWithTheme';
import { Form } from '@unform/web';

import Input from '.';

describe('Input', () => {
  it('should be able render Input correctly', () => {
    renderWithTheme(
      <Form
        onSubmit={() => {
          console.log('ok');
        }}
      >
        <Input name="email" type="text" />
      </Form>,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
