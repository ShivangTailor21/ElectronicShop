import React, { useState } from 'react';

function PaymentOption() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [error, setError] = useState(null);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleSecurityCodeChange = (event) => {
    setSecurityCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TO DO: Implement your payment processing logic here
    console.log(`Payment Method: ${paymentMethod}`);
    console.log(`Card Number: ${cardNumber}`);
    console.log(`Expiration Date: ${expirationDate}`);
    console.log(`Security Code: ${securityCode}`);
  };

  return (
    <div>
      <h2>Payment Option</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select a payment method</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="americanexpress">American Express</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <br />
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234-5678-9012-3456"
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type="text"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            placeholder="MM/YY"
          />
        </label>
        <br />
        <label>
          Security Code:
          <input
            type="text"
            value={securityCode}
            onChange={handleSecurityCodeChange}
            placeholder="123"
          />
        </label>
        <br />
        <button type="submit">Make Payment</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default PaymentOption;