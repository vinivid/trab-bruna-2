import "./AdminPage.css";
import { ShineButton } from "../ShineButton/ShineButton";
import { ProductForm } from "./ProductForm";
import { useState, useRef } from "react";

const ProductList = ({ products }) => {
  const handleDelete = (product) => {
    // TODO: wire up your fetch/delete logic here using product.id (or whatever identifier your API uses)
    console.log("Dog");
  };

  return (
    <div className="product-list">
      {products.length === 0 && (
        <p className="product-list__empty">No products registered yet.</p>
      )}
      {products.map((product, i) => (
        <div key={product.id ?? i} className="product-list__row">
          {product.imageLink && (
            <img className="product-list__thumb" src={product.imageLink} alt={product.name} />
          )}
          {!product.imageLink && <div className="product-list__thumb product-list__thumb--empty" />}
          <div className="product-list__info">
            <p className="product-list__name">{product.name}</p>
            <p className="product-list__desc">{product.description}</p>
          </div>
          <div className="product-list__action">
            <ShineButton variant="danger" onClick={() => handleDelete(product)}>Deletar</ShineButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export const AdminPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Health Potion", description: "Restores 50 HP.", imageLink: "" },
    { id: 2, name: "Mana Elixir",   description: "Restores 30 MP.", imageLink: "" },
  ]);

  const handleRegister = (fields) => {
    setProducts((prev) => [...prev, { id: Date.now(), ...fields }]);
  };

  const handleDelete = (product) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  const onRegister = () => {console.log("");}

  return (
    <div className="admin-page">
      <div className="admin-page__col">

        <div className="admin-page__card">
          <h1 className="admin-page__title">Cadastrar produto</h1>
          <ProductForm onSubmit={onRegister} />
        </div>

        <div className="admin-page__card">
          <h2 className="admin-page__title">Todos os produtos</h2>
          <ProductList products={products} />
        </div>

      </div>
    </div>
  );
}

