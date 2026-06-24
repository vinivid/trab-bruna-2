import { useState } from "react";
import { ShineButton } from "../ShineButton/ShineButton";
import "./ProductForm.css";

export const ProductForm = ({ onSubmits }) => {
  const [fields, setFields] = useState({ nome: "", url_img: "", desc: "", val: "" });
  const [error, setError] = useState([true, true, true, true]);

  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (error.includes(true) === "") {
      await onSubmits(fields);
    }
  };

  return (
    <div className="product-form">

      <div className="product-form__error">Todos os campos precisam ser preenchidos</div>

      <div className="product-form__field">
        <label className="product-form__label">Nome do produto</label>
        <input
          className="product-form__input"
          type="text"
          placeholder="ex: Poção maldita"
          value={fields.nome}
          onChange={(s) => {
            if (s.target.value === "") setError(error.map((v, i) => i == 0 ? true : v));
            else setError(error.map((v, i) => i == 0 ? false : v));
            set("nome")(s)
          }}
        />
      </div>

      <div className="product-form__field">
        <label className="product-form__label">Link da imagem do produto</label>
        <input
          className="product-form__input"
          type="url"
          placeholder="https://..."
          value={fields.url_img}
          onChange={(s) => {
            if (s.target.value === "") setError(error.map((v, i) => i == 1 ? true : v));
            else setError(error.map((v, i) => i == 1 ? false : v));
            set("url_img")(s);
          }}
        />
      </div>

      <div className="product-form__field">
        <label className="product-form__label">Descrição do produto</label>
        <textarea
          className="product-form__input product-form__input--textarea"
          placeholder="Descreva o produto..."
          value={fields.desc}
          onChange={(s) => {
            if (s.target.value === "") setError(error.map((v, i) => i == 2 ? true : v));
            else setError(error.map((v, i) => i == 2 ? false : v));  
            set("desc")(s)
          }}
          rows={4}
        />
      </div>

      <div className="product-form__field">
        <label className="product-form__label">Valor do prooduto</label>
        <textarea
          className="product-form__input product-form__input--textarea"
          placeholder="ex: 500 moedas"
          value={fields.val}
          onChange={(s) => {
            if (s.target.value === "") setError(error.map((v, i) => i == 3 ? true : v));
            else setError(error.map((v, i) => i == 3 ? false : v));  
            set("val")(s);
          }}
        />
      </div>

      <div className="product-form__footer">
        <ShineButton disabled={error.includes(true)} onClick={handleSubmit}>Cadastrar</ShineButton>
      </div>
    </div>
  );
};
