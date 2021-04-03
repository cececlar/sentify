import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const fetchData = async () => {};

  useEffect(() => {
    fetchData();
  }, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
