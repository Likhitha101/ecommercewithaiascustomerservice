import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import plates from "../assets/plates.jpg"; 
import cups from "../assets/cups.jpg"; 
import teapot1 from "../assets/teapot1.jpg";

const products = [
  { id: 1, name: "Elegant Plate Set", price: 1200, img: plates },
  { id: 2, name: "Vintage Tea Cups", price: 1800, img: cups },
  { id: 3, name: "Elegant Plate Set", price: 1200, img: plates },
  { id: 4, name: "Elegant Teapot", price: 1200, img: teapot1 },
];

const ProductContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: #fff;
  width: 200px;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Button = styled.button`
  background: #333;
  color: white;
  padding: 8px;
  border: none;
  margin-top: 5px;
  cursor: pointer;
`;

function ProductList() {
  return (
    <ProductContainer>
      {products.map((product) => (
        <Card key={product.id}>
          <Link to={`/product/${product.id}`}>
            <Image src={product.img} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <Link to={`/product/${product.id}`}>
            <Button>View Details</Button>
          </Link>
        </Card>
      ))}
    </ProductContainer>
  );
}

export default ProductList;
