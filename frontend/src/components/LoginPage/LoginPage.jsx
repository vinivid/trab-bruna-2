import { useState } from "react";
import { useRef } from "react";
import "./LoginPage.css";
import { ShineButton } from "../ShineButton/ShineButton";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async () => {
    const res = await login(password);
    if (res) 
      navigate("/")
    else
      setError("Você não sabe o segredo");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-card__title">Entrada de administrador</h1>

        {error && (
          <div className="login-card__error">{error}</div>
        )}

        <div className="login-card__field">
          <label className="login-card__label">Password</label>
          <input
            className="login-card__input"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-card__footer">
          <ShineButton onClick={handleLogin}>Login</ShineButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
