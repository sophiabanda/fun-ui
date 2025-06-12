import './Card.css';
import products from '../../data';

export default function Card() {
    return (
        <>
            <div className="card-container">
                {products.map((product) => (
                    <div key={product.id} className="card">
                        <h2>{product.product}</h2>
                        <article>{product.description}</article>
                        <div className="price-button-div">
                            <p>Price: {product.price}</p>
                            <button id="cart-button">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
