import React, { createContext, useContext } from "react";

// Create and export the context (named export)
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Export the Provider separately (optional, convenience)
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}
