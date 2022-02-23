import React, { createContext, FC, useState } from "react";

type IHeaderContext = {
  headerIsOpen: boolean;
  toggleHeader: (boolean: boolean) => void;
};
const initialState = {
  headerIsOpen: false,
  toggleHeader: () => {},
};

export const HeaderContext = createContext<IHeaderContext>(initialState);
export const HeaderContextProvider: FC = ({ children }) => {
  const [headerIsOpen, setHeaderIsOpen] = useState(false);
  const toggleHeader = (boolean: boolean) => setHeaderIsOpen(boolean);
  return (
      <HeaderContext.Provider value={{ headerIsOpen, toggleHeader}}>
          {children}
      </HeaderContext.Provider>
  )
};
