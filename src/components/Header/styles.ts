import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 18rem;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;

    ${media.greaterThan('medium')`
    height: 28rem;
    `}
  `}
`;
