import styled, { css } from 'styled-components';

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
