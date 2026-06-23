import { useState } from "react";
import { ShineButton } from "../ShineButton/ShineButton";
import "./ProductForm.css";

export const ProductForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({ name: "", imageLink: "", description: "" });

  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    if (onSubmit) onSubmit(fields);
  };

  return (
    <div className="product-form">
      <div className="product-form__field">
        <label className="product-form__label">Product name</label>
        <input
          className="product-form__input"
          type="text"
          placeholder="e.g. Health Potion"
          value={fields.name}
          onChange={set("name")}
        />
      </div>

      <div className="product-form__field">
        <label className="product-form__label">Product image link</label>
        <input
          className="product-form__input"
          type="url"
          placeholder="https://..."
          value={fields.imageLink}
          onChange={set("imageLink")}
        />
      </div>

      <div className="product-form__field">
        <label className="product-form__label">Product description</label>
        <textarea
          className="product-form__input product-form__input--textarea"
          placeholder="Describe the product..."
          value={fields.description}
          onChange={set("description")}
          rows={4}
        />
      </div>

      <div className="product-form__footer">
        <ShineButton onClick={handleSubmit}>Register</ShineButton>
      </div>
    </div>
  );
};
