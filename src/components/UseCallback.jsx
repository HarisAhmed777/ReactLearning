import React, { useEffect, useState ,useCallback} from "react";
import ListforCallback from "./ListforCallback";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getitems = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number]); // Memoize the function based on `number`

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  useEffect(()=>{
    console.log(number,"from useeffect")
  },[number])
  const handlechnage = (e)=>{
    console.log(e.target.value);
    console.log("came to handlechnage");
    setNumber(parseInt(e.target.value));
  }
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e)=>handlechnage(e)}
      />
      <div style={themeStyles}>UseCallback</div>
      <button onClick={()=>setDark((curr)=>!curr)}>ToggleTheme</button>
      <ListforCallback getitems = { getitems }/>
    </>
  );
};

export default UseCallback;
