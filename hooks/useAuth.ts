import { useContext } from "react";
import { AuthContext } from "../src/app/providers/Authentication/AuthenticationProvider";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used inside the ThemeProvider");
  }
  return context;
};

export default useAuth;
