import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

const [user, setUser] = useState(null);
  const toggleTheme = () => {
  auth.onAuthStateChanged(u => setUser(u));
  };


  return (
    <ThemeContext.Provider value={{ user, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
