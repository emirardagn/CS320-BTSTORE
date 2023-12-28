import React, { useState } from 'react';
import './CreateNewProduct.css';

function CreateNewProduct() {

    var symbol = /"([^"]+)"/;
    var catching = document.cookie.match(symbol);
    let infoText = document.getElementById("infoText")
    //check artist is logged in
    if (catching && catching.length > 1) {
        var artistID = catching[1];
    } else {
        window.location.href = '/';
    }

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        fetch("http://localhost:3000/artist/"+artistID+"/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: productName,
                description:description,
                price:price
              }),
            })
              .then(response => response.json())
              .then(data => {
              })
              .catch(error => {
              });
            }
    return (
        <div className="CreateNewProduct-artist">
            <div className='nav'>
            <a href='/dashboard'>Dashboard</a>
            <a href='/profilePageArtist'>My Profile</a>
            <a href='/productPage'>My Paintings</a>
            <a href='/createNewProduct'>Sell New Paintings</a>
            </div>
            <h1>Add New Product</h1>
            <h2 id = "infoText">You can sell your painting from here!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className='inputArtist'
                    type="text"
                    placeholder="Painting Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <textarea
                    className='inputArtist'
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    className='inputArtist'
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button className='btn-primary' type="submit">Sell</button>
            </form>
        </div>
    );
}

export default CreateNewProduct;
