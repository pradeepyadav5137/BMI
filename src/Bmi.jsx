import React, { useState } from 'react'

function Bmi() {

    const [height , setHeight] = useState("")
    const [weight , setWeight] = useState("")
    const [result , SetBmi] = useState("")

    function CalculateBmi() {
        SetBmi( (weight * 100 * 100) / (height * height)) 
            
        
    }


    return (
        <>
             <label htmlFor="">Height( in cm )  </label><input type="number" name="" id="" value={height} onChange={(e) => setHeight(e.target.value)} />
          <label htmlFor="">   Weight( in Kg ) </label><input type="number" name="" id="" value={weight} onChange={(e) => setWeight(e.target.value)} />

            <button onClick={CalculateBmi}>Caculate BMI</button>
            <div>
                <h2>{result}</h2>
            </div>
        </>
    )
}

export default Bmi