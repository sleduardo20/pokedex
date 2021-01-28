import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: min(110rem, 100%);
    background: ${theme.colors.white};
  `}
`;

export const Pokeballs = styled.div`
  background-image: url('/img/bgPokbola.svg');
  background-size: cover;
`;
