import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }

  a, button {
    transition: all 0.2s;
    outline: none;

    &:hover {
      filter: brightness(0.5);
    }

    &:focus, &:active {
      border: 1px solid ${(props) => props.theme.palette.engineeringOrange};
    }
  }



  body {
    background-color: ${(props) => props.theme.palette.gunmetal};
    color: ${(props) => props.theme.palette.frenchGray};
  }

`;
