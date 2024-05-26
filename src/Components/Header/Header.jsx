import React from 'react'
import "./header.css"
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header' id='header' >
      <div className="headerTitle">
        <h1>Ordre Your favourite food here</h1>
        <p>Choose from a diverse menu featuring adelectable array of dishes crafted with the finest ingredents and culinary expertise . Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time </p>
        <a href="#menu"><button >View Menu</button></a>
      </div>
      
    </div>
  )
}

export default Header
