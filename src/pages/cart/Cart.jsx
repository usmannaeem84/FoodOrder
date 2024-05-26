import React, { useContext } from 'react';
import "./cart.css";
import { Context } from '../../context/Context';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { food_list, cartItems, removeCart, getTotalAmount } = useContext(Context);

  const navigate = useNavigate()

  return (
    <div className='Cartt'>
      <div className="cartItems">
        <div className="cartTitle">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (


              <div key={item._id} className="cartItem cartTitle">
                <div>

                  <img className='cartImg' src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <div>

                  <img className='remove2' onClick={() => removeCart(item._id)} src={assets.cross_icon} alt="" />
                </div>

              </div>


            );
          }

        })}
      </div>


      <div className="cartBottom">
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

       <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartRight">
          <p>If you have promo code , Enter it here
          </p>

          <div className="cinput">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Cart;
