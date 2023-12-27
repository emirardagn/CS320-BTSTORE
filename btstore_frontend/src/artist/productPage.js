import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Burada API'dan ürünleri çekiyoruz
        
    }, []);

    const editProduct = (productId) => {
        // Ürün düzenleme mantığı burada
    };

    const removeProduct = (productId) => {
        // Ürün silme mantığı burada
    };

    return (
        <div className="ProductPage-artist">
            <h1>Products</h1>
            <div className="ProductList-artist">
                {products.map(product => (
                    <div key={product.id} className="ProductItem-artist">
                        <p>{product.name}</p>
                        <p>Stok: {product.stock}</p>
                        <p>Fiyat: {product.price} TL</p>
                        <button onClick={() => editProduct(product.id)}>Edit</button>
                        <button onClick={() => removeProduct(product.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <Link to="/createNewProduct">Add New Product</Link>
        </div>
    );
}

export default ProductPage;