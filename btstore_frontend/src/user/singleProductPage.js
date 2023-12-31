import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // React Router ekledik
import { useLocation } from 'react-router-dom';
import './user.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SingleProductPage() {
  const { state } = useLocation();

  var symbol = /"([^"]+)"/;
  var catching = document.cookie.match(symbol);
  if (catching && catching.length > 1) {
    var userID = catching[1];
    
  } else {
    window.location.href = '/';
  }
  const addProductToCart = () => {
    fetch("http://localhost:3000/users/"+userID+"/basket/add/"+state.product.id, {
    method: 'POST',
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

};
  useEffect(() => {
    //check user is logged in
    if (catching && catching.length > 1) {
      var userID = catching[1];
    } else {
      window.location.href = '/';
    }
  }, [catching]);

  return (
    <div className="product-detail-container-user">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand style={{padding:'20px'}}><Link to="/shoppingPage">Shop</Link></Navbar.Brand>
            <Nav.Link style={{ textDecoration: 'none', color: 'inherit' }}><Link to="/orderPage"  style={{ textDecoration: 'none', color: 'inherit' }}>My Orders</Link></Nav.Link>
            <Nav.Link style={{ textDecoration: 'none', color: 'inherit' }}><Link to="/profilePageUser"  style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {state && state.product ? (
        <>
        
          <h2>{state.product.name}</h2>
          <div className="product-details-user">
            <img className="paintingsURL" src={state.product.url} alt={state.product.name} />
            <p>Description: {state.product.description}</p>
            <p>Price: {state.product.price} TL</p>
            <p>{state.product.id}</p>
            <button onClick={addProductToCart}>Add to Cart</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleProductPage;