import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  padding: 1em;
  grid-gap: 1% ;

  @media(max-width: 800px) {
    justify-content:center;
  }
`;
