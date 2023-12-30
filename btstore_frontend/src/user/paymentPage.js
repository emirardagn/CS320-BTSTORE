import React, { useState } from 'react';
import './user.css';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Ödeme işleme ve validasyon kodları buraya eklenebilir
    console.log({ cardNumber, cardHolder, expiryDate, cvv });
    if (paymentSuccess) {
      deleteProductById(productId); // productId should be retrieved from context or props
    }
  };

  

  return (
    <div className="payment-page">
      <h1>Payment Information</h1>
      <form onSubmit={handleConfirmPayment}>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Card Name</label>
          <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </div>
        <button type="submit">Confirm Payment</button>
      </form>
    </div>
  );

}

export default PaymentPage;
