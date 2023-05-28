import React, { useState } from 'react';
import cart from './assets/svg-gobbler.svg';
import './CartWidget.css';

const CartWidget = () => {
    const [productCount, setProductCount] = useState(0);
    

    return (
        <div className="cartwidget">
        <img src={cart} alt="cart-widget" />
        <span>{productCount}</span>
        </div>
    );
};

export default CartWidget;
