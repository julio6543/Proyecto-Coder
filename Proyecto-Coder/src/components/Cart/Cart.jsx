import { useContext } from "react";
import { Link } from 'react-router-dom';
import './Cart.css';
import { CartContext } from '../../CartContext/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    if (cart.length === 0) {
        return (
        <div className="cartContainer">
            <h1>No hay productos en el carrito</h1>
            <Link to="/" className="option-link">
            Productos
            </Link>
        </div>
        );
    }

    const formattedTotal = new Intl.NumberFormat().format(total);

    return (
        <div className="cartContainer">
        {cart.map((p) => (
            <CartItem key={p.id} {...p} />
        ))}
        <div className="cartSummary">
            <h3>Total: ${formattedTotal}</h3>
            <button onClick={clearCart} className="cleanButton">
            Limpiar
            </button>
            <Link to="/checkout" className="optionLink">
            Checkout
            </Link>
        </div>
        </div>
    );
};

export default Cart;
