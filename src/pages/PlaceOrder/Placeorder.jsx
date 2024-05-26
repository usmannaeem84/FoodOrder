import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import "./placeorder.css"
import { useNavigate } from 'react-router-dom'




const Placeorder = () => {

    const navigate = useNavigate()
    
    const {getTotalAmount} = useContext(Context) 

  return (
    <div className='PlaceOrder'>
    <div className="placeOrderCont">
        <div className="UserInfoInputs">
<h1>Delivery Information</h1>
<div className="mulltiInfo">
    <input type="text"  placeholder='First name'  />
    <input type="text"  placeholder='Last name'  />
</div>
<input type="text" placeholder='Email adress'   />
<input type="text"  placeholder='Street'  />
<div className="mulltiInfo">
    <input type="text" placeholder='City'   />
    <input type="text" placeholder='State'   />
</div>
<div className="mulltiInfo">
    <input type="text" placeholder='Postal Code'   />
    <input type="text" placeholder='Country'   />
</div>
<input type="text" placeholder='Phone no.' />
        </div>

        <div className="cartLeft">
          <h2>Cart Total</h2>
          <div className="stotal">
            <p>Sub total</p>
            <span>${getTotalAmount()}</span>
          </div>
          <hr />
          <div className="dtotal">
            <p>Sub total</p>
            <span>${getTotalAmount() > 0 ? 2 : 0}</span>
          </div>
          <hr />
          <div className="total">
            <p>Total</p>
            <span>${getTotalAmount() > 0 ? getTotalAmount() + 2 : 0}</span>
          </div>

       <button onClick={()=>navigate("/")}>PROCEED TO PAYMENT</button>
        </div>

    </div>
    </div>
  )
}

export default Placeorder
