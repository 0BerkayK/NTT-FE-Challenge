import React from "react";
import { useSelector } from "react-redux";

function CardList() {
  const { cartItems, quantity,total } = useSelector((store) => store.cart);
  return <div>

  </div>;
}

export default CardList;
