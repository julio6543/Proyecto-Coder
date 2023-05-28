import React, { useContext, useState } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import CartItem from '../CartItem/CartItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Checkout.css'
// import { writeBatch, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../firebase';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, cleanCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
        const orderObj = {
            buyer: {
            name,
            phone,
            email,
            },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const batch = writeBatch(db);

        const outOfStock = [];

        // Actualizar stock de productos y construir la lista de productos sin stock suficiente
        orderObj.items.forEach((item) => {
            const itemRef = db.collection('items').doc(item.id);
            batch.update(itemRef, { stock: item.stock - item.quantity });

            if (item.stock < item.quantity) {
            outOfStock.push(item);
            }
        });

        if (outOfStock.length === 0) {
            // Crear la orden en la base de datos
            const ordersRef = db.collection('orders');
            const newOrderRef = ordersRef.doc();
            batch.set(newOrderRef, orderObj);

            // Confirmar la transacción
            await batch.commit();

            setOrderId(newOrderRef.id);
            cleanCart();
        } else {
            // Si hay productos sin stock suficiente, mostrar un mensaje de error
            throw new Error('Algunos productos están fuera de stock');
        }
        } catch (error) {
        console.log('Error al crear la orden:', error);
        }

        setLoading(false);
    };

    return (
        <div>
        <h1>Checkout</h1>
        <h2>Resumen de la compra:</h2>
        {cart.length === 0 ? (
            <p>No hay elementos en el carrito.</p>
        ) : (
            <ul>
            {cart.map((item) => (
                <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                />
            ))}
            </ul>
        )}
        <h3>Total: ${total}</h3>

        <h2>Formulario de compra:</h2>
        <CheckoutForm onConfirm={createOrder} />

        {loading && <p>Procesando...</p>}
        {orderId && <p>Orden creada con éxito. ID de orden: {orderId}</p>}
        </div>
    );
};

export default Checkout;
