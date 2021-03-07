import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    div {
      padding:${theme.spacings.small};
      display: flex;
      align-items: center;
      justify-content: space-between;

      ${media.lessThan('medium')`
         margin-top: ${theme.spacings.small};
         margin-left: ${theme.spacings.small};

         
      `}

      img {
        margin: ${theme.spacings.xxxlarge} 0 ${theme.spacings.large} 0;
        
        ${media.lessThan('medium')`
         display:none;
        `}
      }
    }
  
    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      

      div{
        width: 81.5rem;
        
        &:focus-within {
        width: 74.8rem;
        }
      }

      ${media.lessThan('medium')`
        width: 90%;
        
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
          width: 35rem;
          margin-top: ${theme.spacings.xlarge};
          margin-bottom: ${theme.spacings.xlarge};

          &:focus-within {
            width: 24rem;
          }
        }
      `}
    }
  }
`}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    width: min-content;
    height: min-content;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
      color: ${theme.colors.darkBlue};
      transition: 0.2s;

      &:hover {
        color: ${theme.colors.secondary};
      }

      svg {
        margin-left: ${theme.spacings.medium};
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  `}
`;

export const WrapperCards = styled.main`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxlarge};
    margin-top: calc(${theme.spacings.xxxlarge} * 2);
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 1.2rem;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
    justify-content: center;

    display: grid;
    grid-template-columns: repeat(3, 30rem);
    justify-items: center;
    row-gap: ${theme.spacings.xxxlarge};

    ${media.lessThan('medium')`
    width: 90%;
    grid-template-columns: 30rem;
    margin-top: ${theme.spacings.xxxlarge};
    
    `}
  `}
`;
