import { createContext, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children  }) => {
  const [activeDrawner, setActiveDrawner] = useState(false);

  const SetactiveDrawner = () => {
    setActiveDrawner(!activeDrawner);
  };

  return (
    <NavbarContext.Provider
      value={{
        SetactiveDrawner,
        activeDrawner,
      }}
    >
      { children }
    </NavbarContext.Provider>
  );
};

export { NavbarContext, NavbarProvider };
