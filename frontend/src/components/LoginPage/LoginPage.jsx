import { useState } from "react";
import { useRef } from "react";
import "./LoginPage.css";
import { ShineButton } from "../ShineButton/ShineButton";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async () => {
    console.log("Got here")
    const res = await login(name, password);
    if (res === 200)
      navigate("/");

    if (res === 401)
      setError("Erro no login, senha ou nome errados");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-card__title">Login</h1>

        {error && (
          <div className="login-card__error">{error}</div>
        )}

        <div className="login-card__field">
          <label className="login-card__label">Nome</label>
          <input
            className="login-card__input"
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
