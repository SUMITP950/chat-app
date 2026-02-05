import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
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
