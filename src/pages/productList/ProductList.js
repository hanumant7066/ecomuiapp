import React, { useEffect, useState } from 'react';
import './ProductList.css';


const ProductList = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        const getProductLists = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json()
            console.log(data)
            setProductList(data)

        }
        getProductLists()
    }, []);

    return (
        <div className="product-container">
            {productList.map((product) => (
                <div className="product-details" key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                </div>
            ))}
        </div>

    );
};

export default ProductList;