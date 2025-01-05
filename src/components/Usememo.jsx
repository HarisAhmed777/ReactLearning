import React, { useMemo, useState } from 'react'

const Usememo = () => {
  const [initalvalue,setInitalvalue] = useState(0);
  const [dark,setDark] = useState(false);
  const themestyle = {
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }
  // previously wwe done 
  // const doublenumber = slowfunc(initalvalue);
  
  // by using useMemo()
  const doublenumber = useMemo(()=>{
    return slowfunc(initalvalue);
  },[initalvalue])


  //while changing the number because of the loop running in slow func,the output will be delayed for some seconds.
  //but if we click the toggle button ,then also the state is taking some seconds delay,because ,each time the state changes ,the component rerenders ,so the delay is happening

  //To avoid that ,there is a simple concpet called useMemo();
  //usememo will memorize the value ,if only that particualr values changes it will allow to call the slowfunction,if the valu doent change ,the usememo will take it value from memory itself
  //Lot of time is saved;


  return (
    <>
      <input
        type="number"
        value={initalvalue}
        onChange={(e) => setInitalvalue(e.target.value)}
      />
      <button onClick={()=>setDark((curr)=>!curr)}>ToggleTheme</button>
    <div style={themestyle}>{doublenumber}</div>
    </>
  );
}

export default Usememo;

function slowfunc(num){
  for(let i=0;i<1000000000;i++){}
  return num*2;
}