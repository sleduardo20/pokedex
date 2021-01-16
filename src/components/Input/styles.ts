import styled, { css } from 'styled-components';

type ContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0.2rem;
  height: 3.8rem;
  background: #ffff;
  position: relative;
  border-radius: 0.4rem;
  border: 1px solid rgba(142, 142, 142, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ isFocused }) =>
    isFocused ? '1px solid #8F8F8F' : '1px solid #B7B7B7'};
  &:focus-within label {
    font-size: 1rem;
    top: 0;
    left: 4px;
  }
  button {
    width: auto;
    font-weight: 600;
    cursor: pointer;
    padding: 0.4rem;
    background: none;
    border: none;
  }
  input {
    width: 100%;
    height: 100%;
    outline: 0;
    padding: 0.8rem 0.4rem 0 0.4rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    appearance: none;
  }
  label {
    width: fit-content;
    position: absolute;
    top: ${({ isFilled }) => (isFilled ? '0' : '10px')};
    left: ${({ isFilled }) => (isFilled ? '4px' : '10px')};
    font-size: ${({ isFilled }) => (isFilled ? '1rem' : '')};
    color: #909090;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }
`;
