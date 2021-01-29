import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type ContainerProps = Pick<ButtonProps, 'bg'>;

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
  `,
  darkBlue: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkBlue};
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, bg }) => css`
    width: 24.3rem;
    height: 4.8rem;
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.spacings.small};
    outline: none;
    border: none;
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.light};
    text-transform: uppercase;
    color: ${theme.colors.white};

    ${!!bg && modifiers[bg](theme)};
  `}
`;
