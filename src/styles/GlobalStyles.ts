import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration: none;
  }

  html{
    font-size: 62.5%;
  }

  html,body, #__next {
    height: 100%;
  }

  body{
    font-family: ${({ theme }) => theme.font.fontFamily};
    background-color: ${({ theme }) => theme.colors.white};
  }

  
`;
