import { useState } from "react";
import "./AdminPage.css";
import { useRef } from "react";
import { ShineButton } from "../ShineButton/ShineButton";
import { ProductForm } from "../ProductForm/ProductForm";

export const AdminPage = ({ onRegister }) => {
  const handleSubmit = (fields) => {
    if (onRegister) onRegister(fields);
  };

  return (
    <div className="admin-page">
      <div className="admin-page__card">
        <h1 className="admin-page__title">Register Product</h1>
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
