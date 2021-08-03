import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 0.6rem 0.5rem;
  height: 200px;
  background-color: #ffff;
  display: grid;
  grid-area: "cabecalho" "corpo" "password" "footer";
  grid-template-columns: 100%;
  grid-template-rows: 20% 30% 40% 20%;
  margin-top: 2em;
  min-width: 350px;
  border-radius: 5%;
 

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const DivPassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  grid-area: password;
  grid-row: 3 / 3;
  grid-column: 1 / 1;

  p {
    color: #333;
    font-weight: 600;

    &:hover {
      transition: 0.2s;
      color: black;
    }
  }
`;

export const DivDescription = styled.div`
  div {
    grid-area: corpo;
    grid-row: 2 / 2;
    grid-column: 1 / 1;
    padding: 0.2rem;

    p {
      color: #333;
    }
    /* align-self: flex-end; */
  }
`;

export const DivCardFotter = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    grid-row: 4 / 4;
    color: #333;
    grid-area: footer;
    grid-column: 1 / 1;
  }

  a{
    cursor: pointer;
    color:#333;
    font-weight: 600;
  }
`;


export const TitleCard = styled.p`
  grid-area: cabecalho;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  color: #333;
  font-weight: bold;
`