import React from 'react'
import { HOCComp } from './HOC_Component'
import ButtonForHOC from './ButtonForHOC'

const HOC = () => {
    const UsingHOC = HOCComp(ButtonForHOC);
  return (
    <>
    <div>HOC</div>
    <UsingHOC label="Haris" amount = "2000" users = "Myself"/>
    </>
  )
}

export default HOC