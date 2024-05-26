import React, { useState,useContext } from 'react'
import { assets } from "../../assets/assets"
import "./navbar.css"
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'

const Navbar = ({showPop , setshowPop}) => {

    const { getTotalAmount} = useContext(Context);

    const [menu , setMenu] = useState("Home") 

    return (
        <div className='navbar'>


            <div className="logo">
                <Link to="/"><img src={assets.logo} alt="" /></Link>
            </div>
            <ul>
               <Link to="/"><li onClick={()=>setMenu("Home")} className={menu==="Home" ? "active " : "" } >Home</li></Link> 
                <a href="#menu"><li onClick={()=>setMenu("Menu")} className={menu==="Menu" ? "active " : "" } >Menu</li></a>
                <a href="#mobile"><li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app" ? "active " : "" } >Mobile-app</li></a>
                <a href="#footer"><li onClick={()=>setMenu("Contact")} className={menu==="Contact" ? "active " : "" } >Contact</li></a>

            </ul>
            <div className="navbarRight">

                <img src={assets.search_icon} alt="" />
                <div className="cart">
                    <Link to="/Cart">< img src={assets.basket_icon} alt="" /></Link>

                    
                    <div className={getTotalAmount()===0 ? "" : "dot" }></div>
                </div>
                <button onClick={()=>setshowPop(true)} className="navbtn">Sign in
                </button>
            </div>
        </div>
    )
}

export default Navbar
