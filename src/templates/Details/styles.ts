import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import Card from '../../components/Card';

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    img {
      margin-top: 6.2rem;
    }

    div {
      margin-top: 9.2rem;
    }

    ${media.lessThan('medium')`
      padding:  ${theme.spacings.medium} ${theme.spacings.medium} 0;
      
      div {
        margin-top: 0;
        padding: ${theme.spacings.xxxlarge} 0;
      }
      
      img {
        display: none;
      }
    `}
  `}
`;

export const WrapperDetails = styled.article`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: calc(${theme.spacings.xxxlarge} * 2);
    margin-bottom: calc(${theme.spacings.xxxlarge} * 2);

    ${media.lessThan('medium')`
      width: 30rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
  `}
`;
export const SectionCard = styled.section`
  ${media.lessThan('medium')`
      margin-bottom: 1.6rem;
  `}
`;

export const SectionDetails = styled.section`
  ${({ theme }) => css`
    width: 66.8rem;
    height: min-content;
    padding: ${theme.spacings.xxxlarge};
    border-radius: ${theme.spacings.medium};
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);

    h2 {
      font-size: ${theme.font.size.xxlarge};
      font-weight: ${theme.font.medium};
      line-height: 5.2rem;
      padding-bottom: ${theme.spacings.xlarge};
      border-bottom: 1px solid ${theme.colors.gray};
    }

    ${media.lessThan('medium')`
      width: 30rem;
  `}
  `}
`;

export const Attacks = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};

    h3 {
      font-size: ${theme.font.size.xlarge};
      font-weight: ${theme.font.medium};
      line-height: 3.2rem;
      margin-bottom: ${theme.spacings.small};
    }

    p {
      font-weight: ${theme.font.light};
      text-align: justify;
      line-height: 2.1rem;
      margin-bottom: ${theme.spacings.xxlarge};

      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`;

export const Particulars = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxxlarge};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: ${theme.spacings.xxxlarge};

    ${media.lessThan('medium')`
      grid-template-columns: 1fr 1fr;
    `}
  `}
`;

export const Feature = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: ${theme.font.size.small};
      font-weight: ${theme.font.light};
      text-transform: uppercase;
    }
    span {
      margin-top: ${theme.spacings.small};
      font-size: ${theme.font.size.large};
      font-weight: ${theme.font.regular};
    }
  `}
`;
