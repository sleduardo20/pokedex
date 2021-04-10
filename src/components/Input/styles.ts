import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type ContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isFilled }) => css`
    width: ${isFilled ? '34.8rem' : '100%'};

    ${media.lessThan('medium')`
      width: ${isFilled ? '28rem' : '100%'};
    `}

    position: relative;
    padding: 0.2rem;
    height: 4.8rem;
    background: ${theme.colors.white};
    position: relative;
    border-radius: ${theme.spacings.small};
    border: 1px solid ${isFilled ? theme.colors.ternary : theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s ease-out;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${isFilled ? theme.colors.ternary : theme.colors.gray};
    }

    &:focus-within {
      width: 34.8rem;

      ${media.lessThan('medium')`
      width: 28rem;
    `}
    }

    &:focus-within label {
      font-size: 1rem;
      top: 0;
      left: 4px;
      transform: translateX(0);
    }

    button {
      width: auto;
      font-weight: ${theme.font.bold};
      cursor: pointer;
      padding: ${theme.spacings.small};
      outline: none;
      background: none;
      border: none;

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${isFilled ? theme.colors.ternary : theme.colors.gray};
      }
    }
    input {
      width: 100%;
      height: 95%;
      margin-top: ${theme.spacings.medium};
      outline: 0;
      border: none;
      background: none;
      padding: ${theme.spacings.small};
      font-size: ${theme.font.size.large};
      line-height: ${theme.font.size.large};
    }
    label {
      width: auto;
      position: absolute;
      top: ${isFilled ? '0' : '10px'};
      left: ${isFilled ? '4px' : '50%'};
      transform: ${isFilled ? 'translateX(0)' : 'translateX(-50%)'};
      font-size: ${isFilled ? '1rem' : '1.4rem'};
      color: ${isFilled ? theme.colors.ternary : theme.colors.gray};
      transition: all 0.2s ease-in-out;
      pointer-events: none;
    }
  `}
`;
