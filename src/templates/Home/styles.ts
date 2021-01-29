import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 28rem;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;

    img {
      margin-top: ${theme.spacings.xxxlarge};
    }
  `}
`;

export const WrapperForm = styled.div`
  ${({ theme }) => css`
    width: 41.2rem;
    height: 24.8rem;
    background: ${theme.colors.darkBlue};
    padding: ${theme.spacings.xxxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};
    margin-top: calc(${theme.spacings.xxxlarge} * 5);
    border-radius: ${theme.spacings.medium};

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  `}
`;
