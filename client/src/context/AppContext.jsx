import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [allEntries, setAllEntries] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios
      .get("/api/entries")
      .then(({ data }) => {
        setAllEntries(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <AppContext.Provider
      value={{ allEntries, setAllEntries, loading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
