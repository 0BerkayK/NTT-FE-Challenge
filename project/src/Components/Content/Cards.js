import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://honey-badgers-ecommerce.glitch.me/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>{product.price}</Card.Title>
              <Card.Title>Description</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.shippingMethod}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Cards;
