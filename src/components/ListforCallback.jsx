import React, { useEffect, useState } from 'react'

const ListforCallback = ({getitems}) => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        setItems(getitems);
        console.log("setting items")
    },[getitems])
  return (  
    <div>
   {items.map((item, index) => {
    return <p key={index}>{item}</p>;
})}

    </div>
  )
}

export default ListforCallback