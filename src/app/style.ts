import { styled } from "styled-components";

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-block: 24px;
  height: 100vh;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.palette.platinum};
  }

  div {
    margin-top: 36px;
    display: flex;
    gap: 12px;
  }

  input {
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.palette.frenchGray};
    background-color: ${(props) => props.theme.palette.gunmetal};
    color: ${(props) => props.theme.palette.frenchGray};
    padding: 6px 12px;
    width: 200px;
  }

  button {
    font-weight: bold;
    padding: 6px 12px;
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: ${(props) => props.theme.palette.engineeringOrange};
    color: ${(props) => props.theme.palette.platinum};
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 24px;
  }
`;
