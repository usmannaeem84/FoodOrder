import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../context/Context'
import "./foodItem.css"

const FoodItem = ({ id, price, name, desc, img }) => {

    const { cartItems, addCart, removeCart } = useContext(Context)


    return (

        <div className='foodItem'>
            <div className="foodImg">
                <img src={img} alt="" />

                {
                    !cartItems[id] ?

                        <img className='add' onClick={() => addCart(id)} src={assets.add_icon_white} alt="" />

                        :
                        <div className='addMinus'>
                            <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>

            <div className="foodInfo">
                <div className="fNameRate">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='desc'>{desc}</p>
                <p className='price'>$ {price}</p>
            </div>

        </div>
    )
}

export default FoodItem
