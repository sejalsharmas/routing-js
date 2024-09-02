import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Featuresimg from "./Features.png"
function Features() {
  return (
    <div>
    <Navbar/>
    <h1 className='page1'>Features</h1>
    <img src={Featuresimg} className='img1'/>
    </div>
  )
}

export default Features