import React, { useState } from 'react';
import './CheckoutForm.css';


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
        name,
        phone,
        email
        };

        onConfirm(userData);
    };

    return (
        <div className='Container'>
        <form onSubmit={handleConfirm} className='Form'>
            <label className='label'>
            Nombre
            <input
                className='Input'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
            />
            </label>
            <label className='label'>
            Teléfono
            <input
                className='input'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
            />
            </label>
            <label className='label'>
            Email
            <input
                className='input'
                type='email'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            </label>
            <div className='label'>
            <button type='submit' className='Button'>Crear orden</button>
            </div>
        </form>
        </div>
    );
};

export default CheckoutForm;
