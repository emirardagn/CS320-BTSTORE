import React, { useState, useEffect } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function OrderPage() {
  const [paintingsData, setPaintingsData] = useState([]);
  const [userID, setUserID] = useState(null);
  var symbol = /"([^"]+)"/;
  var catching = document.cookie.match(symbol);

  const removeFromBasket = () => {
    if (!userID) {
      window.location.href = '/';
      return;
    }
  
    fetch("http://localhost:3000/users/id/" + userID)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const removePromises = data.basket.paintings.map(painting => (
          fetch("http://localhost:3000/users/" + userID + "/basket/remove/" + painting.id, {
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
              console.log("Item removed from basket:", data);
            })
            .catch(error => {
              console.error('Error removing item from basket:', error);
            })
        ));
  
        Promise.all(removePromises)
          .then(() => {
            console.log("All items removed from basket");
            // Refresh the page
            window.location.reload();
          })
          .catch(error => {
            console.error('Error removing items from basket:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };
  

  useEffect(() => {
    if (catching && catching.length > 1) {
      setUserID(catching[1]);
    } else {
      window.location.href = '/';
    }

    fetch("http://localhost:3000/users/id/" + userID)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const paintings = data.basket.paintings.map(painting => ({
          name: painting.name,
          price: painting.price,
        }));
        document.getElementById("price").innerText = "Total Price: "+data.basket.total;
        setPaintingsData(paintings);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
      
  }, [userID]);

  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productName, quantity, address, paymentMethod });
  };

  return (
    <div className="container-user">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand style={{ padding: '20px' }}><Link to="/shoppingPage">Shop</Link></Navbar.Brand>
              <Nav.Link style={{ textDecoration: 'none', color: 'inherit' }}><Link to="/orderPage" style={{ textDecoration: 'none', color: 'inherit' }}>My Orders</Link></Nav.Link>
              <Nav.Link style={{ textDecoration: 'none', color: 'inherit' }}><Link to="/profilePageUser" style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2 className="my-4">Place Your Order</h2>
      <ul>
        {paintingsData.map((painting, index) => (
          <li key={index}>
            Name: {painting.name}, Price: {painting.price}
          </li>
        ))}
      </ul>
      <p id ='price'></p>
        <button onClick={() => window.location.href = '/paymentPage'}>
        Go to Payment Page
      </button>
      <button onClick={removeFromBasket}>Remove From Basket</button>
    </div>
  );
}

export default OrderPage;
