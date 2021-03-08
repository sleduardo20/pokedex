import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Base = styled.div`
  width: 10rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(3px);
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 72%;
`;

export const Pokeball = styled.img`
  width: 10rem;
  height: 10rem;
  position: absolute;
  left: 50%;
  top: 50%;
  animation: ldio-18euhb50d7g 1s linear infinite;
  box-sizing: content-box;

  @keyframes ldio-18euhb50d7g {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
    }
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 108px);
      animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
