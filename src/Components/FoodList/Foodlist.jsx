import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import "./foodlist.css"
import FoodItem from '../../FoodItem/FoodItem'

const Foodlist = ({ category }) => {

    const {food_list} = useContext(Context)

    return (
        <div className='foodList' id='menu'>
            <h2>Top dishes near you</h2>
            <div className="foodlistItem">

                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} price={item.price} desc={item.description} img={item.image} />;
                    }
                })}

            </div>

        </div>
    )
}

export default Foodlist
