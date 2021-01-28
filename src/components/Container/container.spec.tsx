import { screen } from '@testing-library/react';
import { renderWithTheme } from 'util/renderWithTheme';

import Wrapper from '.';

describe('<Wrapper/>', () => {
  it('should be able render Wrapper correctly', () => {
    const { container } = renderWithTheme(
      <Wrapper>
        <h1>Title</h1>
        <span>Content</span>
      </Wrapper>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
