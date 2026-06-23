import { useRef } from "react";
import "./ProductCard.css";
import { ShineButton } from "../ShineButton/ShineButton";

const ProductCard = ({
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

export default function App() {
  return (
    <div className="page">
      <ProductCard
        name="Wireless Headphones"
        imageSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
        imageAlt="Wireless headphones on a surface"
        description="Premium sound quality with active noise cancellation. Up to 30 hours of battery life and ultra-comfortable ear cushions for all-day wear."
        onBuyClick={() => alert("Added to cart!")}
      />
    </div>
  );
}
