import { createContext, useState } from "react";

export const MenuContext = createContext({});

export function MenuContextProvider({ children }) {
  const [menuInfo, setMenuInfo] = useState({});

  return (
    <MenuContext.Provider value={{ menuInfo, setMenuInfo }}>
      {children}
    </MenuContext.Provider>
  );
}
