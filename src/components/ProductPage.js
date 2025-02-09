import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import plates from "../assets/plates.jpg"; 
import cups from "../assets/cups.jpg"; 

const products = [
  { id: 1, name: "Elegant Plate Set", price: 1200, img: plates, description: "A beautifully designed plate set for special occasions." },
  { id: 2, name: "Vintage Tea Cups", price: 1800, img: cups, description: "Classic and vintage-style tea cups for an elegant tea party." },
];

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const Button = styled.button`
  background: #333;
  color: white;
  padding: 10px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
`;

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <Container>
      <Image src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </Container>
  );
}

export default ProductPage;
