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
    const [url, setURL] = useState('');

    const logoutHandler = () => {
        document.cookie = null;
        window.location.href = '/';
    }

    const handleSubmit = () => {
        fetch("http://localhost:3000/artist/"+artistID+"/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: productName,
                description:description,
                price:price,
                url:url
              }),
            })
              .then(response => response.json())
              .then(data => {
              })
              .catch(error => {
              });
            }
    return (
        <div className="Dashboard-artist">
            <aside className="Sidebar-artist">
                <nav>
                    <h1 className='btstoreDashboard'>BT-STORE</h1>
                    <ul>
                        <li><a href='/dashboard'>Dashboard</a></li>
                        <li><a href='/profilePageArtist'>My Profile</a></li>
                        <li><a href='/productPage'>My Paintings</a></li>
                        <li><a href='/createNewProduct'>Sell New Paintings</a></li>
                        <li className='logoutbtn' onClick={logoutHandler}><button>Log out</button></li>
                    </ul>
                </nav>
            </aside>
            <section className="Content-artist">
            <div className="CreateNewProduct-artist">
            <h2>Add New Painting</h2>
            <h2 id = "infoText"></h2>
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
                <input
                    className='inputArtist'
                    type="text"
                    placeholder="Image URL"
                    value={url}
                    onChange={(e) => setURL(e.target.value)}
                />
                <button className='btn-primary' type="submit">Sell</button>
            </form>
        </div>
            </section>
        </div>
        
    );
}

export default CreateNewProduct;
