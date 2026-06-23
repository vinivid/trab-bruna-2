import { useRef } from "react";
import "./ProductCard.css";
import { ShineButton } from "../ShineButton/ShineButton";

export const ProductCard = ({
  name = "Product Name",
  imageSrc,
  imageAlt = "Product image",
  description = "No description provided.",
  onBuyClick,
}) => (
  <div className="product-card">
    <h2 className="product-card__name">{name}</h2>

    <div className="product-card__image-wrapper">
      <img className="product-card__image" src={imageSrc} alt={imageAlt} />
    </div>

    <div className="product-card__description">
      <p>{description}</p>
    </div>

    <div className="product-card__footer">
      <ShineButton onClick={onBuyClick}>Buy</ShineButton>
    </div>
  </div>
);
