import React from 'react'
import {Link} from 'react-router-dom'
const HomePage = () => {
    const buttonstyles ={
        backgroundColor:'gray',
        padding:'10px',
        outline:'none',
        border:0

    }
    const divstyles = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        height:'100vh'
    } 
  return (
    <>
    <div style={divstyles} >
       <Link to='/usememo'> <button style={buttonstyles}>UseMemo</button></Link>
       <Link to ='/usecallback'> <button style={buttonstyles}>UseCallback</button></Link>   
       <Link to ='/functioncomponent'> <button style={buttonstyles}>Functional Component</button></Link>
       <Link to ='/classcomponent'> <button style={buttonstyles}>Class Component</button></Link>
       <Link to ='/useContext'> <button style={buttonstyles}>Use Context </button></Link>
       <Link to ='/hoc'> <button style={buttonstyles}>HOC</button></Link>

    </div>
    </>
  )
}

export default HomePage