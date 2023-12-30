import React, { useState, useEffect } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PaymentPage() {


  var symbol = /"([^"]+)"/;
  var catching = document.cookie.match(symbol);
  if (catching && catching.length > 1) {
    var userID = catching[1];
    
  } else {
    window.location.href = '/';
  }

  useEffect(() => {
    fetch("http://localhost:3000/users/id/" + userID)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById("username").innerText = "Total Price: "+data.basket.total;
      })
      
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userID]);
  
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Ödeme işleme ve validasyon kodları buraya eklenebilir
    console.log({ cardNumber, cardHolder, expiryDate, cvv });
  };

  return (
    <div className="payment-container-user">
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
      <h2 className="my-4">Payment Details</h2>

      <form onSubmit={handlePayment}>
        <div className="form-group-user">
          <label>Card Number</label>
          <input
            type="text"
            className="form-control-user"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
          />
        </div>

        <div className="form-group-user">
          <label>Card Holder</label>
          <input
            type="text"
            className="form-control-user"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="Enter card holder's name"
          />
        </div>

        <div className="form-row-user">
          <div className="form-group-user col-md-6">
            <label>Expiry Date</label>
            <input
              type="text"
              className="form-control-user"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
            />
          </div>
          <div className="form-group col-md-6">
            <label>CVV</label>
            <input
              type="password"
              className="form-control-user"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
            />
          </div>
        </div>
        <p id ='username'></p>

        <button type="submit" className="btn btn-primary-user" onClick={removeFromBasket}>Make Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;