import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
      
      
      ${media.lessThan('medium')`
         width : 30rem;
         padding:  ${theme.spacings.medium} ${theme.spacings.medium} 0;
      `}
    
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      ${media.lessThan('medium')`
         padding: ${theme.spacings.medium} 0;
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

      ${media.lessThan('medium')`
         width: 30rem;
         flex-direction: column;
      `}
      
    
      div{
        width: 57rem;
      
      &:focus-within {
        width: 47rem;
        }
      }

      ${media.lessThan('medium')`
        width: 30rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
          width: 28rem;
          height: 4.8rem;
          margin-top: ${theme.spacings.xlarge};
          margin-bottom: ${theme.spacings.xlarge};

          &:focus-within {
            width: 24rem;
            }
          }

          button {
            width: 28rem;

            & + button {
              margin-top: ${theme.spacings.xlarge};
            }
          }
        `}
      }
    }
  `}
`;

export const WrapperCards = styled.main`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxlarge};
    margin-top: calc(${theme.spacings.xxxlarge} * 2);
    margin-bottom: calc(${theme.spacings.xxxlarge} * 2);
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

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.xxxlarge};
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: ${theme.font.size.xlarge};
      color: ${theme.colors.darkBlue};
    }
  `}
`;
