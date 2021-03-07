import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

      img:first-child {
        margin-top: calc(${theme.spacings.xxxlarge} * 2);

        ${media.lessThan('medium')`
          width : 36.6rem;
          height : 14.9rem;
        `}
      }
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
