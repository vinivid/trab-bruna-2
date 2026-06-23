import { useState } from "react";
import './ProductForm.css';

const Login = ({ onSubmit }) => {
  const [fields, setFields] = useState({ name: "", imageLink: "", description: "" });

  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    if (onSubmit) onSubmit(fields);
  };

  return (
    <div className="product-form">
      <div className="product-form__field">
        <label className="product-form__label">Nome do usuário</label>
        <input
          className="product-form__input"
          type="text"
          placeholder="João"
          value={fields.name}
          onChange={set("name")}
        />
      </div>

      <div className="product-form__field">
        <label className="product-form__label">Senha</label>
        <input
          className="product-form__input"
          type="password"
          placeholder="******"
          value={fields.password}
          onChange={set("password")}
        />
      </div>

      <div className="product-form__footer">
        <ShineButton onClick={handleSubmit}>Register</ShineButton>
      </div>
    </div>
  );
};