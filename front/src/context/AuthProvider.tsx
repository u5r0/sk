import { type ReactNode, createContext, useState } from "react";

export type ContextType = {
  auth: AuthState,
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>
}
const AuthContext = createContext<ContextType | null>(null);

export type AuthState = {
  logged?: boolean;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
