import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
    const [products, setProducts] = useState([]);
    const [artistID, setArtistID] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const symbol = /"([^"]+)"/;
                const catching = document.cookie.match(symbol);
                if (catching && catching.length > 1) {
                    const artistID = catching[1];
                    setArtistID(artistID);
                    const response = await fetch(`http://localhost:3000/artist/id/${artistID}`);
                    if (!response.ok) {
                        throw new Error('Error');
                    }
                    const data = await response.json();
                    setProducts(data.paintings);
                } else {
                    document.cookie = null
                    window.location.href = '/';
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const editProduct = (productId) => {

    };

    const removeProduct = (productId) => {
        const url = 'http://localhost:3000/painting/delete/'+productId;
        console.log(url);
        fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("done")
        })
        .catch(error => {
            window.location.href = '/productPage';
        });
    };



    return (
        <div className="ProductPage-artist">
            <div className='nav'>
                <a href='/dashboard'>Dashboard</a>
                <a href='/profilePageArtist'>My Profile</a>
                <a href='/productPage'>My Paintings</a>
                <a href='/createNewProduct'>Sell New Paintings</a>
            </div>
            <h1>My Paintings</h1>
            <h1 id='infoText'></h1>
            <div className="ProductList-artist">
                {products.map(product => (
                    <div key={product.id} className="ProductItem-artist">
                        <p>Name:</p>
                        <p>{product.name}</p>
                        <p>Description: </p>
                        <p>{product.description}</p>
                        <p>Price (TL):</p>
                        <p className='info'>{product.price}</p>
                        <button className='btn-edit-product' onClick={() => editProduct(product.id)}>Edit</button>
                        <button className='btn-remove-product' onClick={() => removeProduct(product.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
