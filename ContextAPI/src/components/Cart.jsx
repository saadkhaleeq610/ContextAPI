import React from 'react';
import { useCart } from '../context/Cart';

function Cart() {
    const cart = useCart();

    // Calculate total bill
    const totalBill = cart?.items.reduce((total, item) => total + item.price, 0) || 0;

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {
                    cart && cart.items.map((item, index) => (
                        <li key={index}>{item.name} - ${item.price}</li>
                    ))
                }
            </ul>
            <h5>Total Bill: ${totalBill.toFixed(2)}</h5>
        </div>
    );
}

export default Cart;
