import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }

  a, button, input {
    transition: all 0.2s;
    outline: none;
    border: 1px solid transparent;

    &:focus, &:active {
      border: 1px solid #bf0603ff;
    }
  }

  a, button {
    cursor: pointer;
    &:focus, &:active, &:hover {
      filter: brightness(0.8);
    }
  }

  body {
    background-color: #253031ff;
    color: #c5c3c6ff;
    min-height: 100vh;
  }

  main, header {
    max-width: 1440px;
    margin: 0 auto;
    padding-inline: 24px;
  }

`;
