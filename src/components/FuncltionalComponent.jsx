import React, { useState } from 'react'

const FuncltionalComponent = () => {
    const [firstnumber,setFirstnumber] = useState(1);
    const [secondnumber,setSecondnumber] = useState(100);
  return (
    <>
        <h1>{firstnumber}</h1>
        <h1>{secondnumber}</h1>
        <button onClick={()=>setFirstnumber((e)=>e+1)}>Add first number</button>
        <button onClick={()=>setSecondnumber((e)=>e+1)}>Add second number</button>

    </>
  )
}

export default FuncltionalComponent