import { styled } from "styled-components";

export const HeroWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 48px;
  max-width: 900px;
`;

export const ListWrapper = styled.div`
  flex: 1;
  align-self: flex-start;
  h2 {
    margin-bottom: 24px;
  }

  li {
    list-style: none;
    margin-bottom: 12px;
  }
`;
