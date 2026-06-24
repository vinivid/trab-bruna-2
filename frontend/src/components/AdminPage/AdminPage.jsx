import "./AdminPage.css";
import { ShineButton } from "../ShineButton/ShineButton";
import { ProductForm } from "./ProductForm";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/authContext";

export const AdminPage = () => {
  const { authToken } = useAuth();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const get = async () => {
      const url = "http://localhost:3000/produtos/"
      const resp = await fetch(url, {
        method: "GET"
      });
      
      if (resp.status === 200) {
        const json = await resp.json();
        setProducts(json);
      } 
    }

    get();
  }, [])

  const handleRegister = async (fields) => {
    setProducts((prev) => [...prev, { id: Date.now(), ...fields }]);

    console.log(fields);

    const url = "http://localhost:3000/produtos/"
    const res = await fetch(url, {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(fields)
    });

  };

  const handleDelete = async (product) => {
    setProducts((prev) => prev.filter((p) => p.nome !== product.nome));

    const url = "http://localhost:3000/produtos/" + product.nome;
    console.log(url);
    const res = await fetch(url, {
      method: "DELETE",
      headers: { 
        Authorization: `Bearer ${authToken}`,
      },
    });
  };

  return (
    <div className="admin-page">
      <div className="admin-page__col">

        <div className="admin-page__card">
          <h1 className="admin-page__title">Cadastrar produto</h1>
          <ProductForm onSubmits={handleRegister} />
        </div>

        <div className="admin-page__card">
          <h2 className="admin-page__title">Todos os produtos</h2>
            <div className="product-list">
              {products.length === 0 && (
                <p className="product-list__empty">Nenhum produto registrado ainda.</p>
              )}
              {products.map((product, i) => (
                <div key={product.id ?? i} className="product-list__row">
                  {product.url_img && (
                    <img className="product-list__thumb" src={product.url_img} alt={product.name} />
                  )}
                  {!product.url_img && <div className="product-list__thumb product-list__thumb--empty" />}
                  <div className="product-list__info">
                    <p className="product-list__name">{product.nome}</p>
                    <p className="product-list__desc">{product.desc}</p>
                  </div>
                  <div className="product-list__action">
                    <ShineButton variant="danger" onClick={() => handleDelete(product)}>Deletar</ShineButton>
                  </div>
                </div>
              ))}
            </div>
        </div>

      </div>
    </div>
  );
}

