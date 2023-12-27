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
  };

  return (
    <div className="payment-container-user">
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

        <button type="submit" className="btn btn-primary-user">Make Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
