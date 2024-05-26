import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="fcontainer">
                <div className="left">
                    <div className="fLogo">
                        <a href="#header"><img src={assets.logo} alt="" /></a>
                    </div>
                    <p>Our restaurant is dedicated to providing an exceptional dining experience, whether you’re enjoying a meal with us or ordering for delivery. Explore our menu and taste the passion we put into every dish. Thank you for choosing us to satisfy your cravings!

</p>

                    <div className="social">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />

                    </div>
                </div>

                <div className="right">
                    <div className="comp">
                        <h2>Company</h2>
                        <div className='info'>
                            <p>Home</p>
                            <p>About us</p>
                            <p>Delivery</p>
                            <p>Privacy policy</p>
                        </div>
                    </div>
                    <div className="getTouch">
                        <h2>Get In Touch</h2>
                        <div className='info'>
                            <p>+123-456-789</p>
                            <p>usman.naeem12257@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p>Copyright 2024 @ Tomato.com - All right reserved </p>
        </div>
    )
}

export default Footer
