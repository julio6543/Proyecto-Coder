import { Link, useNavigate } from "react-router-dom";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";

export const ItemDetail = ({ id, image, brand, price, description }) => {
  const navigate = useNavigate();
  const stock = 10;
  const { addItem } = useContext(CartContext)

  const [quantityAdded, setQuantityAdded] = useState(0);


  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      brand,
      price,
      image
    };

    addItem(item, quantity);
  };

  return (
    <div className="item-detail">
      <h1>Detalle del producto</h1>
      <img src={image} alt="" />
      <h2>{brand}</h2>
      <h3>{price}</h3>
      <h3>{description}</h3>
  
      <div className='prueba'>
        {quantityAdded > 0 ? (
          <Link to='/cart' className="addCart">Terminar Compra</Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
        <button onClick={() => navigate(-1)} className="addCart">Volver</button>
      </div>
    </div>
  );
};

export default ItemDetail;
