import styled from "styled-components";

export const CreateDiv = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  padding-top: 20px;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  background: #0cf;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;

  &:hover {
    background: #09c;
    -webkit-transition: background 0.6s ease-in-out;
    -moz-transition: background 0.6s ease-in-out;
    transition: background-color 0.6s ease-in-out;
  }
`;

export const ContainerForm = styled.div`
 	height: 350px;
  width: 70%;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
`

export const DivInputContainer = styled.div`
  margin-bottom: 1em;
  zoom: 1;

  &:before {
    content: "";
    display: table;
  }

  &:after {
    content: "";
    display: table;
  }
`;

export const InputFormPassword = styled.input`
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;

  &:focus {
    outline: 0;
    border-color: #28d3c1;
  }
`;
