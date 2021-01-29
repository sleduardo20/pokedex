import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: max(36rem, 100%);
    height: 100vh;
    margin: 0 auto;
    background: url('/img/bgPokbola.svg') no-repeat center;
    background-color: ${theme.colors.white};
    background-size: cover;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  `}
`;
