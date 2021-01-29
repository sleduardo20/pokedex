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

  it('should be able render background color primary', () => {
    renderWithTheme(
      <Button bg="primary">
        <span>Entrar</span>
      </Button>,
    );

    expect(screen.getByRole('button')).toHaveStyle({ background: '#CC0000' });
  });

  it('should be able render background color secondary', () => {
    renderWithTheme(
      <Button bg="secondary">
        <span>Entrar</span>
      </Button>,
    );

    expect(screen.getByRole('button')).toHaveStyle({ background: '#FFCB05' });
  });

  it('should be able render background color darkBlue', () => {
    renderWithTheme(
      <Button bg="darkBlue">
        <span>Entrar</span>
      </Button>,
    );

    expect(screen.getByRole('button')).toHaveStyle({ background: '#003A70' });
  });
});
