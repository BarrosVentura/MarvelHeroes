import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  padding-block: 36px;

  a {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.frenchGray};
  }
`;
