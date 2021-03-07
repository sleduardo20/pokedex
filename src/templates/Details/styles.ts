import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    
    div{
      padding:${theme.spacings.small};
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        margin: ${theme.spacings.xxxlarge} 0 ${theme.spacings.large} 0;
        
        ${media.lessThan('medium')`
          width : 36.6rem;
          height : 14.9rem;
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
    }
  }
`}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    width: min-content;
    height: min-content;

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
  `}
`;

export const WrapperCards = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxxlarge};
    margin-top: ${theme.spacings.xlarge};
    background: ${theme.colors.white};
    border-radius: 1.2rem;
    opacity: background 20%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    row-gap: ${theme.spacings.xxxlarge};
  `}
`;
