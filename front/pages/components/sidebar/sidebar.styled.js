import styled from "styled-components";
export const SideNav = styled.div`
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #333;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #fff;
    display: block;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: #f1f1f1;
    }
  }

  @media screen and (max-width: 920px) {
    width: ${(props) => (props.visible ? "100%" : 0)};
  }

  @media screen and (max-height: 450px) {
    padding-top: 15px;
    a {
      font-size: 18px;
    }
  }
`;

export const CloseBtn = styled.a`
  visibility: ${(props) => (props.closeBtn ? "visible" : "hidden")};
  @media screen and (max-width: 920px) {
    padding-top: 15px;
    font-size: 18px;
    visibility: ${(props) => (!props.closeBtn ? "visible" : "hidden")};
  }
`;


export const SideItens = styled.div`
  display: flex;
  border-bottom: ${(props)=>props.activeMenu ? '1px solid #ffff' : ''};

  width: 60%;
  justify-content: space-between;

  a{
    cursor: pointer;
  }
`;
