import React from 'react';
import { useCart } from '../context/Cart';

function Item(props) {
    const cart = useCart();

    const addToCart = () => {
        cart.setItems([...cart.items, { name: props.name, price: props.price }]);
    };

    return (
        <div>
            <h4>{props.name}</h4>
            <p>Price: {props.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Item;
