import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
    return (
        <div className='form'>
            <div className='form-container'>
                <h2>Add Product Page</h2>
                <label>Product Name: </label>
                <input type='text' placeholder='Enter product name'></input>
            </div>
        </div>
    );
};

export default AddProduct;