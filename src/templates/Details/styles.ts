import styled, { css } from 'styled-components';

export const HeaderContent = styled.div`
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
`;

export const WrapperDetails = styled.article`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: calc(${theme.spacings.xxxlarge} * 2);
    margin-bottom: calc(${theme.spacings.xxxlarge} * 2);
  `}
`;
export const SectionCard = styled.section``;

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
