import React, { useState } from 'react';
import './user.css';

function OrderPage() {


  var symbol = /"([^"]+)"/;
  var catching = document.cookie.match(symbol);
  
  //check user is logged in
  if (catching && catching.length > 1) {
      var userID = catching[1];
  } else {
      window.location.href = '/';
  }


  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sipariş işleme ve validasyon kodları buraya eklenebilir
    console.log({ productName, quantity, address, paymentMethod });
  };

  return (
    <div className="container-user">
      <h2 className="my-4">Place Your Order</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group-user">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control-user"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>

        <div className="form-group-user">
          <label>Quantity</label>
          <input
            type="number"
            className="form-control-user"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </div>

        <div className="form-group-user">
          <label>Shipping Address</label>
          <textarea
            className="form-control-user"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          ></textarea>
        </div>

        <div className="form-group-user">
          <label>Payment Method</label>
          <select
            className="form-control-user"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary-user">Submit Order</button>
      </form>
    </div>
  );
}

export default OrderPage;
