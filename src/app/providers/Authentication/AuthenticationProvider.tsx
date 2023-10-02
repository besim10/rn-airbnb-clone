import { ReactNode, createContext, useMemo, useState } from "react";

interface IContext {
  user: undefined | null;
  signInWithEmailAndPassword: () => Promise<any>;
  signUpWithEmailAndPassword: () => Promise<any>;
  signOut: () => void;
}
export const AuthContext = createContext<IContext>({
  user: undefined,
  signInWithEmailAndPassword: () => Promise.prototype,
  signUpWithEmailAndPassword: () => Promise.prototype,
  signOut: () => Function,
});
export interface IAuthenticationProviderProps {
  children: ReactNode;
}
export const AuthenticationProvider = ({
  children,
}: IAuthenticationProviderProps) => {
  const [user, setUser] = useState<undefined | null>(undefined);
  const signInWithEmailAndPassword = async () => {};
  const signUpWithEmailAndPassword = async () => {};
  const signOut = () => {};
  const memoValue = useMemo(
    () => ({
      user,
      signInWithEmailAndPassword,
      signUpWithEmailAndPassword,
      signOut,
    }),
    [user]
  );
  return (
    <AuthContext.Provider value={memoValue}>{children}</AuthContext.Provider>
  );
};
