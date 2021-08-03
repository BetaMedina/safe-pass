// import { useState } from "react";
import { useContext} from "react";
import { NavbarContext } from "../../../context/navbarContext";
import { SideNav, SideItens } from "./sidebar.styled";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie"
import Swal from "sweetalert2"

export function Nav({page,alias}) {
  const router = useRouter();
  const { activeDrawner } = useContext(NavbarContext);
  const [_, setCookie] = useCookies(["token"])

  const handleSignOut = () =>{
    return Swal.fire(
      "Logout feito com sucesso",
      "Esperamos ver você em breve <3",
      "success"
    ).then(()=>{
      setCookie("token", null, {
        path: "/",
        maxAge: 28800, 
        sameSite: true,
      })
      return window.location.href = '/';
    })
  }

  return (
    <div className="drawer">
      <SideNav className="sidenav" visible={activeDrawner}>
        <SideItens activeMenu={page === "list"}>
          <a onClick={() => router.push("/password/list")}>
            Senhas
          </a>
        </SideItens>
        <SideItens activeMenu={page === "create"}>
          <a onClick={() => router.push("/password/create")}>
            Cadastrar senhas
          </a>
        </SideItens>
        <a onClick={handleSignOut}>Sair</a>
      </SideNav>
    </div>
  );
}
