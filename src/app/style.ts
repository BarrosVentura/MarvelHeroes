import { styled } from "styled-components";

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-block: 24px;

  h1 {
    font-size: 2rem;
    color: #dcdcddff;
  }

  form {
    margin-top: 36px;
    display: flex;
    gap: 12px;
  }

  input {
    border-radius: 6px;
    border: 1px solid #c5c3c6ff;
    background-color: #253031ff;
    color: #c5c3c6ff;
    padding: 6px 12px;
    width: 200px;
  }

  button {
    font-weight: bold;
    padding: 6px 12px;
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: #bf0603ff;
    color: "#dcdcddff";
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 24px;
  }
`;
