import { screen } from '@testing-library/react';
import { renderWithTheme } from 'util/renderWithTheme';

import Button from '.';

describe('<Button/>', () => {
  it('should be able render Button correctly', () => {
    const { container } = renderWithTheme(
      <Button>
        <span>Buscar</span>
      </Button>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Buscar')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
