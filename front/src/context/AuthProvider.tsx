import { type ReactNode, createContext, useState } from "react";

export type ContextType = {
  auth: UserAuth,
  setAuth: React.Dispatch<React.SetStateAction<UserAuth>>
}
const AuthContext = createContext<ContextType| null>(null);

export type UserAuth = {
  email?: string;
  password?: string;
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
