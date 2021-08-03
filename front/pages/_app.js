import "../styles/globals.css";
import "../styles/auth.css";
import { CookiesProvider } from "react-cookie";

import { NavbarProvider } from "../context/navbarContext";
function MyApp({ Component, pageProps }) {
  return (
    <NavbarProvider>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </NavbarProvider>
  );
}

export default MyApp;
