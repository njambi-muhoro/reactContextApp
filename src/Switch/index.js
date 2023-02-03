import React from "react";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="switch-container">
      <label htmlFor="toggle-switch">
        <input
          type="checkbox"
          id="toggle-switch"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Switch;
