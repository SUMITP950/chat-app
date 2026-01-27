import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setCount (prev => (prev +10));
    setTheme(prev => (prev ==='light'));
  };

  return (
    <ThemeContext.Provider value={{ theme,count, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
