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
        document.getElementById('popup').style.display = 'block';
        document.getElementById("input0").innerText = productId;
        
    };

    const applyChanges = () =>{
        let paintingID = document.getElementById("input0").innerText;
        let name = document.getElementById("input1").value;
        let description = document.getElementById("input2").value;
        let price = document.getElementById("input3").value;
        let url = document.getElementById("input4").value;

        fetch("http://localhost:3000/painting/update/"+paintingID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name,
                description:description,
                price:price,
                url:url
              }),
            })
              .then(response => response.json())
              .then(data => {
                document.getElementById('popup').style.display = 'none';
                window.location.href="/productPage"
              })
              .catch(error => {
                document.getElementById('popup').style.display = 'none';
                window.location.href="/productPage"
              });
    }

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
                        <img className='paintingsURL' id="productIMG" src={product.url} alt="null"></img>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price} TL</p>
                        <button className='btn-edit-product' onClick={() => editProduct(product.id)}>Edit</button>
                        <button className='btn-remove-product' onClick={() => removeProduct(product.id)}>Remove</button>
                    </div>
                ))}
                
                <div style={{ display:'none'}} id="popup">
                    <label for="input0">ID:</label>
                    <text type='number' id="input0"></text>
                    <div></div>
                    <text for="input4">url:</text>
                    <input type="text" id="input4"></input>
                    <text for="input1">Name:</text>
                    <input type="text" id="input1"></input>

                    <text for="input2">Desc:</text>
                    <input type="text" id="input2"></input>

                    <text for="input3">Price:</text>
                    <input type="number" id="input3"></input>

                    <button className='btn-edit-product' onClick={() => applyChanges()}>Apply Changes</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
