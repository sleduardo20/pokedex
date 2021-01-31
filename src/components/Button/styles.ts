import { motion, MotionProps } from 'framer-motion';
import styled, { css, DefaultTheme } from 'styled-components';

type ContainerProps = {
  bg?: 'primary' | 'secondary' | 'darkBlue';
} & MotionProps;

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
    font-weight: ${theme.font.light};
    text-transform: uppercase;
    color: ${theme.colors.darkBlue};
    cursor: pointer;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(105%);
    }

    ${!!bg && modifiers[bg](theme)};
  `}
`;
