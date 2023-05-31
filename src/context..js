
import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL = "https://example-data.draftbit.com/authors?_limit=20";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchAuthors = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setAuthors(data);
      setLoading(false);
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      setResultTitle("No Search Result Found!");
    }
  }, []);

  useEffect(() => {
    fetchAuthors();
  }, [fetchAuthors]);

  return (
    <AppContext.Provider
      value={{
        loading,
        authors,
        resultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
