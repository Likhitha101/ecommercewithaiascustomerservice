import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="wishlist-btn" onClick={handleWishlistClick}>
        {isWishlisted ? "💖" : "🤍"}
      </button>
    </div>
  );
};

export default ProductCard;
