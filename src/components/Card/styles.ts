import styled, { css } from 'styled-components';

import { CardProps, ImageProps } from '.';

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
    border-radius: 0.8rem;

    > img {
      width: 100%;
    }

    ${!!size && containerModifiers[size]}
  `}
`;
