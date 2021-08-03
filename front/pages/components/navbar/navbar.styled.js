import styled from "styled-components";

export const Container = styled.div`
  grid-column: 1 / 3;
  z-index: 4;

  grid-row: 1 / 1;
  background-color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  button {
    visibility: hidden;
    padding-top: 2rem;
    border: none;
    background: none;

    img {
      width: 70%;
    }
  }

  @media screen and (max-width: 920px) {
    button {
      visibility: visible;
    }
  } 
`;
