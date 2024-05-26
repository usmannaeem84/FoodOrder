import React, { useState } from 'react'
import "./loginpop.css"
import { assets } from '../../assets/assets'

const LoginPop = ({setshowPop}) => {


    const [currState, setCurrState] = useState("Login")

    return (
        <div className='LoginPop'>
            <form className="popContainer">
                <div className="pop-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>{setshowPop(false)}} src={assets.cross_icon} alt="" />
                </div>

                <div className="inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Enter your name' required />}
                    <input type="text" placeholder='Enter your email' />
                    <input type="password" placeholder='Enter your password' />
                </div>
                <button className='.fBtn'>{currState === "Login" ? "Log in" : "Create new account"}</button>
                <div className="popCondition">
                    <input type="checkbox" name="" id="" required />
                    <p>By continuing , i agree to the term of use & privacy policy.</p>
                </div>
                {currState === "Login" ?
                    <p className='already'>Create a new account  <span onClick={() => setCurrState("SignUp")}>Click here</span></p> :
                    <p  className='already'>Already hav an account ? <span onClick={() => setCurrState("Login")}>Login in</span> </p>
                }
            </form>

        </div>
    )
}

export default LoginPop
