import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  a, button, input {
    transition: all 0.2s;
    outline: none;

    &:focus, &:active {
      border: 1px solid ${(props) => props.theme.palette.engineeringOrange};
    }
  }

  a, button {
    cursor: pointer;
    &:focus, &:active, &:hover {
      filter: brightness(0.8);
    }
  }

  body {
    background-color: ${(props) => props.theme.palette.gunmetal};
    color: ${(props) => props.theme.palette.frenchGray};
  }

  main {
    max-width: 1440px;
    margin: 0 auto;
    padding-inline: 24px;
  }

`;
