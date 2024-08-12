
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import { useState } from 'react';

function App() {


  const [amount,setAmount]=useState(0)
  const [rate,setRate]=useState(0)

  const [discount,setDiscount]=useState(0)

  const calculate=(e)=>{

    if(amount === 0 || rate === 0){
      alert("Enter values to continue");
    }else{
      const result = parseFloat((amount-((rate/amount)*100)))
      const output = parseFloat(result.toFixed(2));
      console.log(output);
      setDiscount(output)
    }
    
  }

  const reset = (e)=>{
    setAmount(0)
    setRate(0)
    setDiscount(0)
  }

  return (
    <>
      <div className="container">
        <h1>GET DISCOUNT</h1>
        <div className="discount">
          <div className="display">
            <h2>&#8377; { discount } </h2>
          </div>
          <div className="valueIntake">
            <div className="valueForm">
              <form action="">
                <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount||""} onChange={(e)=>setAmount(e.target.value)}/> <br /> <br />
                <TextField id="filled-basic" label="Discount in %" variant="filled" value={rate||""} onChange={(e)=>setRate(e.target.value)}/>
              </form>
              <div className="button">
                <Button onClick={(e)=>calculate(e)}>Calculate</Button>
                <Button onClick={(e)=>reset(e)}>Reset</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
