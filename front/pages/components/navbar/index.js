import { Container } from "./navbar.styled";
import { NavbarContext } from "../../../context/navbarContext";
import { useContext } from "react";

export const Navbar = () => {
  const { SetactiveDrawner } = useContext(NavbarContext);
  return (
    <Container>
      <button onClick={SetactiveDrawner}>
        <img src="https://img.icons8.com/doodle/50/000000/menu.png" />
      </button>
    </Container>
  );
};
