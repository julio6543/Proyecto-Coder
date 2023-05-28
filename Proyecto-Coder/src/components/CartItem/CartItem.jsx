import React, { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import './CartItem.css';

const CartItem = ({ name, price, quantity, id, image }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id); 
  };

  const subtotal = price * quantity; 

  return (
    <div className="Principal">
      <section className="CartItem">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <div>Precio: ${price}</div>
        <div className="quantity">Cantidad: {quantity}</div>
        <div>Subtotal: ${subtotal}</div> 
        <button className="RemoveButton" onClick={handleRemoveItem}>
          X
        </button>
      </section>
    </div>
  );
};

export default CartItem;
