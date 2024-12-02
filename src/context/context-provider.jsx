/* eslint-disable react/prop-types */
import { useState } from "react";
import AppContext from "./app-context";

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;