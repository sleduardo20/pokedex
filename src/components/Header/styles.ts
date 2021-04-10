import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 27rem;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;

    ${media.lessThan('medium')`
      height: min-content;
    `}
  `}
`;
