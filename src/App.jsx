import { Button, Form } from 'react-bootstrap';
import './App.css'
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [discount, setDiscount] = useState(0);

  const calculate = () => {
    if (amount === 0 || rate === 0) {
      alert("Enter values to continue");
    } else {
      const discountAmount = parseFloat(amount * (rate / 100));
      const discountedPrice = parseFloat(amount - discountAmount).toFixed(2);
      setDiscount(discountedPrice);
    }
  }

  const reset = () => {
    setAmount(0);
    setRate(0);
    setDiscount(0);
  }

  return (
    <>
      <div className="container">
        <h1>GET DISCOUNT</h1>
        <div className="discount">
          <div className="display">
            <h2>&#8377; {discount} </h2>
          </div>
          <div className="valueIntake">
            <div className="valueForm">
              <form action="">
                <Form.Control
                  placeholder="Amount"
                  type="number"
                  value={amount || ""}
                  onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                />
                <br /><br />
                <Form.Control
                  placeholder="Discount in %"
                  type="number"
                  value={rate || ""}
                  onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                />
              </form>
              <div className="button">
                <Button onClick={calculate} disabled={!amount || !rate}>Calculate</Button>
                <Button onClick={reset}>Reset</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
