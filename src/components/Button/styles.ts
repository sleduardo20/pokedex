import { motion, MotionProps } from 'framer-motion';
import styled, { css, DefaultTheme } from 'styled-components';

type ContainerProps = {
  bg?: 'primary' | 'secondary' | 'darkBlue';
} & MotionProps;

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.darkBlue};
  `,
  darkBlue: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
  `,
};

export const Container = styled(motion.button)<ContainerProps>`
  ${({ theme, bg }) => css`
    width: 24.3rem;
    height: 3.8rem;
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.spacings.small};
    outline: none;
    border: none;
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.medium};
    text-transform: uppercase;

    cursor: pointer;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(105%);
    }

    ${!!bg && modifiers[bg](theme)};
  `}
`;
