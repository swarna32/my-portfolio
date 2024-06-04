import React, { createContext, useState, useContext } from "react";

// Create the theme context
const ThemeContext = createContext();

// Create a provider for components to consume and update the theme
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);
