import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-width: 100%;
    min-height: 100vh;

    margin: 0 auto;
    background: url('/img/bgPokbola.svg') no-repeat center center fixed;
    background-color: ${theme.colors.white};
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  `}
`;
