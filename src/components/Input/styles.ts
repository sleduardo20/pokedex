import styled, { css } from 'styled-components';

type ContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isFocused, isFilled }) => css`
    width: 100%;
    padding: 0.2rem;
    height: 3.8rem;
    background: ${theme.colors.white};
    position: relative;
    border-radius: ${theme.spacings.small};
    border: 1px solid rgba(142, 142, 142, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${isFocused ? '1px solid #8F8F8F' : '1px solid #B7B7B7'};
    &:focus-within label {
      font-size: ${theme.font.size.small} - 2;
      top: 0;
      left: 4px;
    }
    button {
      width: auto;
      font-weight: ${theme.font.bold};
      cursor: pointer;
      padding: ${theme.spacings.small};
      background: none;
      border: none;
    }
    input {
      width: 100%;
      height: 95%;
      outline: 0;
      border: none;
      background: none;
      padding: ${theme.spacings.small};
      font-size: ${theme.font.size.small};
      line-height: ${theme.font.size.large};
    }
    label {
      width: fit-content;
      position: absolute;
      top: ${isFilled ? '0' : '10px'};
      left: ${isFilled ? '4px' : '10px'};
      font-size: ${isFilled ? '1rem' : ''};
      color: ${theme.colors.gray};
      transition: all 0.2s ease-in-out;
      pointer-events: none;
    }
  `}
`;
