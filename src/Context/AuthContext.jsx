/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  //   localStorage.setItem("isAuth", JSON.stringify(isAuth));
  // }, [user, isAuth]);
  return (
    <AuthContext.Provider value={{ isAuth, setAuth, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
