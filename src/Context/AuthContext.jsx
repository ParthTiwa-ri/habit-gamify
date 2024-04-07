/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ isAuth, setAuth, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
