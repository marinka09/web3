import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import "../style/style.css";
import img1 from "../img/Saint_Honore.jpg";
import img2 from "../img/Opera.jpg";
import img3 from "../img/macarons.jpg";
import img4 from "../img/Paris de Brest.jpg";

const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/list-dessert')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Создаем массив изображений, чтобы обращаться к нему по индексу
    const images = [img1, img2, img3, img4];

    const handleOrderSubmit = (event) => {
        event.preventDefault();
        alert("Your order has been placed successfully!");
    };

    return (
        <div>
            <Header />
            <main className="container" style={{ marginLeft: '280px', marginTop: '-40px' }}>
                <div className="products">
                    <ul>
                        {products.map((product, index) => (
                            <li key={index} className="product-item container">
                                <h3>{product.name}</h3>
                                <img src={images[index]} alt="" />
                                <p className="w-100">{product.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <form id="order-form" onSubmit={handleOrderSubmit} style={{marginTop: '180px', marginBottom:'100px'}}>
                <h2> Order Now</h2>
                    <p>Select the items you want to order and specify the quantity:</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="saint-honore" name="saint-honore" value="Saint-Honoré"/>
                            <label htmlFor="saint-honore">Saint-Honoré</label>
                            <input type="number" id="saint-honore-quantity" name="saint-honore-quantity" value="1"
                                  />
                        </li>
                        <li>
                            <input type="checkbox" id="opera" name="opera" value="Opéra"/>
                            <label htmlFor="opera">Opéra</label>
                            <input type="number" id="opera-quantity" name="opera-quantity" value="0" min="0"/>
                        </li>
                        <li>
                            <input type="checkbox" id="heart-macarons" name="heart-macarons" value="Heart Macarons"/>
                            <label htmlFor="heart-macarons">Heart Macarons</label>
                            <input type="number" id="heart-macarons-quantity" name="heart-macarons-quantity" value="0"
                                   min="0"/>
                        </li>
                        <li>
                            <input type="checkbox" id="paris-brest" name="paris-brest" value="Paris-Brest"/>
                            <label htmlFor="paris-brest">Paris-Brest</label>
                            <input type="number" id="paris-brest-quantity" name="paris-brest-quantity" value="0"
                                   min="0"/>
                        </li>
                    </ul>
                    <input type="submit" value="Place Order"/>
                <p>:)</p>
                <p>;)</p>
                </form>
            <Footer/>
        </div>
    );
};

export default Menu;
