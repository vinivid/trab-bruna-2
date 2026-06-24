import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usr, setUser] = useState(() => JSON.parse(localStorage.getItem("usr")));

  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken"),
  );

  const updateThings = (usr, token) => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
    localStorage.setItem("usr", JSON.stringify(usr));
    setUser(usr);
  };

  const login = async (password) => {
    const url = "http://localhost:3000/adm";

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password
      })
    });

    switch (resp.status) {
      case 200: {
        const json = await resp.json();
        updateThings({name: "Merigold", isAdmin: true}, json.token);
        return true;
      } break;
      case 401:
        return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ usr, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("useAUth without auth provider");

  return ctx;
}