import { useState, useContext, createContext, useEffect } from "react";

const TotalContext = createContext();
const TotalProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
    
  return (
    <TotalContext.Provider value={[total, setTotal]}>
      {children}
    </TotalContext.Provider>
  );
};

// custom hook
const useTotal = () => useContext(TotalContext);

export { useTotal, TotalProvider };