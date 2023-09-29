import React, { useState } from "react";
import { colors } from "../../../constants/Colors";
import { typography } from "../../../constants/Typography";
export interface IThemeContextProps {
  colors: typeof colors.light;
  toggleTheme: () => void;
  isLightTheme: boolean;
  typography: typeof typography;
}

export const ThemeContext = React.createContext<IThemeContextProps | undefined>(
  undefined
);
interface IThemeProvider {
  children: React.ReactNode;
}
const ThemeProvider = (props: IThemeProvider) => {
  const { children } = props;
  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme((previousState) => !previousState);
  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
    toggleTheme,
    isLightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
