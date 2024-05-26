import React from 'react'
import { assets } from '../../assets/assets'
import "./download.css"

const Download = () => {
  return (
    <div className='download' id='mobile'>
      
      <h1>For Better Experience Download</h1> <br /> <h1>Tomato App</h1>
      <div className="DownImg">
<img src={assets.app_store} alt="" />
<img src={assets.play_store} alt="" />
      </div>
    </div>
  )
}

export default Download
