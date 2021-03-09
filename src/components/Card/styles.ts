import styled, { css } from 'styled-components';

import { CardProps } from '.';

type ContainerProps = Pick<CardProps, 'size'>;

const containerModifiers = {
  normal: () => css`
    width: 25rem;
    height: 35rem;
  `,
  large: () => css`
    width: 36.2rem;
    height: 50.7rem;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ size }) => css`
    border-radius: 1.8rem;
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.4);
    transition: 0.1s ease-in-out;
    z-index: 10;

    & :hover {
      transform: scale(1.03);
    }

    a {
      > img {
        width: 100%;
        height: 100%;
      }
    }

    ${!!size && containerModifiers[size]}
  `}
`;
