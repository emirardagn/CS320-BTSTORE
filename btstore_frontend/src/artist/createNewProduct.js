import React, { useState } from 'react';
import './CreateNewProduct.css';

function CreateNewProduct() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {
            name: productName,
            description: description,
            price: price,
            stock: stock
        };

        // Send product addition request to API
        
        
            // Error handling
        
    };

    return (
        <div className="CreateNewProduct">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Stock Quantity"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateNewProduct;
