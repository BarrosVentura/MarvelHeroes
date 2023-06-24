import { styled } from "styled-components";

export const Title = styled.h1`
  margin-top: 48px;
  margin-bottom: 12px;
`;

export const CardsWrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Card = styled.div`
  width: 200px;
  p {
    color: #bf0603ff;
    margin-top: 8px;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
