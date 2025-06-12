import './Card.css';
import '../index.css';
import products from '../../data';
import { useState } from 'react';

export default function Card() {
    const [clickedId, setClickedId] = useState(null);

    function onButtonClick(id) {
        setClickedId(id);
        setTimeout(() => setClickedId(null), 100);
    }

    return (
        <>
            <div className="card-container">
                {products.map((product) => (
                    <div key={product.id} className="card">
                        <h2>{product.product}</h2>
                        <article>{product.description}</article>
                        <div className="price-button-div">
                            <p>Price: {product.price}</p>
                            <button
                                id="cart-button"
                                onClick={() => onButtonClick(product.id)}
                                className={
                                    clickedId === product.id ? 'clicked' : ''
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
