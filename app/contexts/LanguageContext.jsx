"use client";
import { createContext, useContext, useEffect, useState } from 'react';
const LangContext = createContext(null);


export function LangProvider({ children }) {
  const [lang, setLang] = useState(null);
  return (
    <LangContext.Provider value={{lang,setLang}}>
        {children}
    </LangContext.Provider>
  );
}

export function useAuth() {
  
  return useContext(AuthContext);
}




