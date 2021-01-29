import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 24.3rem;
    height: 4.8rem;
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.darkBlue};
    border-radius: ${theme.spacings.small};
    outline: none;
    border: none;

    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.light};
    text-transform: uppercase;
    color: ${theme.colors.white};
  `}
`;
