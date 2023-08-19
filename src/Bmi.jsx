import React, { useState } from 'react'
import './index.css'

function Bmi() {

    const [height , setHeight] = useState("")
    const [weight , setWeight] = useState("")
    const [result , SetBmi] = useState("")

    function CalculateBmi() {
        SetBmi( Math.floor((weight * 100 * 100) / (height * height))) 
            
       
    setWeight('');
    setHeight(''); 
    }



    return (
        <>
        <div className='content'>
              <h1>  CALCULATE YOUR BODY MASS INDEX</h1>
              <div className="height">
             <label htmlFor="">Height( in cm )  </label><input type="number" name="" id="" value={height} onChange={(e) => setHeight(e.target.value)} />
             </div>
             <div className="weight">
          <label htmlFor="">   Weight( in Kg ) </label><input type="number" name="" id="" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="button">
            <button onClick={CalculateBmi}>Caculate BMI</button>
            </div>
            
            <div className='result'>
                <h2>Your BMI is :   {result}</h2>
            </div>
            </div>
        </>
    )
}

export default Bmi