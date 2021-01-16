import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('<Logo/>', () => {
  it('should be able render Logo component normal size', () => {
    render(<Logo />);

    expect(screen.getByRole('img')).toHaveAttribute('height', '149');
    expect(screen.getByRole('img')).toHaveAttribute('width', '366');
  });

  it('should be able render Logo component medium size', () => {
    render(<Logo size="medium" />);

    expect(screen.getByRole('img')).toHaveAttribute('height', '260');
    expect(screen.getByRole('img')).toHaveAttribute('width', '642');
  });

  it('should be able render Logo component large size', () => {
    render(<Logo size="large" />);

    expect(screen.getByRole('img')).toHaveAttribute('height', '323');
    expect(screen.getByRole('img')).toHaveAttribute('width', '798');
  });
});
