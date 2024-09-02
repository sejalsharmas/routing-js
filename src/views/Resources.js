import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Resourcesimg from "./Resources.png"
function Resources() {
  return (
    <div>
    <Navbar/>
    <h1 className='page1'>Resources</h1>
    <img src={Resourcesimg} className='img1'/>
    </div>
  )
}
export default Resources