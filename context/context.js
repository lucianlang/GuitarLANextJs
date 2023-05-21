import { createContext } from "react";

export const ContextCart = createContext();

const Context = ({ children }) => (
  <ContextCart.Provider>
    {children}
  </ContextCart.Provider>
);

export default Context;
