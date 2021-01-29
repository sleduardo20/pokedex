import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 18rem;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;

    ${media.greaterThan('medium')`
    height: 28rem;
    `}

    img {
      margin-top: calc(${theme.spacings.xxxlarge} * 2);

      ${media.greaterThan('medium')`
        margin-top: ${theme.spacings.xxxlarge};
        width: 79.8rem;
        height: 32.3rem;
      
      `}
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
