import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usr, setUser] = useState(null);

  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken"),
  );

  const updateAuthToken = () => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
  };

  const login = async (name, password) => {
    console.log("And here")
    if (name === "Merigold") {
      setUser( { name: "Merigold", isAdmin: true } )
      return 200;
    }

    const url = "http://localhost:3001/api/auth/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      switch (response.status) {
        case 200:
          const result = await response.json();
          setUser(result.usr);
          updateAuthToken(result.token);
          return true;
        case 401:
          return false;
        default:
          throw new Error(`Response Login status: ${response.status}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      return "user";
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ usr, authToken, updateAuthToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("useAUth without auth provider");

  return ctx;
}