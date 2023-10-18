import { createContext, useState } from "react";

export const PayDContext = createContext();

export function PayDProvider({ children }) {
  const [data, setData] = useState(0);

  return (
    <PayDContext.Provider value={{ data, setData }}>
      {children}
    </PayDContext.Provider>
  );
}
