import { useRef } from "react";
import "./ProductCard.css";
import { ShineButton } from "../ShineButton/ShineButton";

export const ProductCard = ({
  nome = "Product Name",
  url_img,
  imageAlt = "Product image",
  desc = "No desc provided.",
  val,
  onBuyClick,
}) => (
  <div className="product-card">
    <h2 className="product-card__name">{nome}</h2>

    <div className="product-card__image-wrapper">
      {url_img
        ? <img className="product-card__image" src={url_img} alt={imageAlt} />
        : <div className="product-card__image-placeholder" />}
    </div>

    <div className="product-card__description">
      <p>{desc}</p>
    </div>

    <div className="product-card__footer">
      {val !== undefined && (
        <span className="product-card__price">{val}</span>
      )}
      <ShineButton onClick={onBuyClick}>Comprar</ShineButton>
    </div>
  </div>
);