import React, { createContext, useState, useEffect } from "react";

// Define allowed themes
export type ThemeType = "theme1" | "theme2" | "theme3";

// Define context value type
interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

// Create context with default value (temporary empty setter)
export const ThemeContext = createContext<ThemeContextType>({
  theme: "theme1",
  setTheme: () => {},
});

// Create provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const stored = localStorage.getItem("theme") as ThemeType | null;
    return stored ?? "theme1";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
