import { useContext } from "react";
import { ThemeContext } from "../ThemeContext.jsx";

export default function ThemeToggle() {
  const { theme, count,toggleTheme } = useContext(ThemeContext);
console.log(theme, count)
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : `rgb(${Math.min(count * 20, 255)}, 0, 0)`,
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Current Theme: {count}</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
