import { useState, createContext } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState("");

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

