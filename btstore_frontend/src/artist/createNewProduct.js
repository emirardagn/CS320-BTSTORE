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
        infoText.innerText ="";
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
                infoText.innerText ="done!";
              })
              .catch(error => {
                infoText.innerText ="something went wrong, please try again.";
              });
            }
        

    return (
        <div className="CreateNewProduct-artist">
            <h1>Add New Product</h1>
            <h1 id = "infoText"></h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Painting Name"
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
                <button className='button-artist' type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateNewProduct;
