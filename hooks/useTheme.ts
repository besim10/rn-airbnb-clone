import { useContext } from "react";
import { ThemeContext } from "../src/app/providers/ThemeProvider";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }
  return context;
};

export default useTheme;
