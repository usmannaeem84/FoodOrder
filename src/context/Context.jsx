import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Context = createContext(null)


const StoreContextProvider = (props) => {


    const [cartItems, setCartItem] = useState({})

    const addCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }


    const getTotalAmount = () => {

        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const foodInfo = food_list.find((product) => product._id === item)
                totalAmount += foodInfo.price * cartItems[item]
            }

        }
        return totalAmount;
    }



const contextValue = {
    getTotalAmount,
    food_list,
    cartItems,
    setCartItem,
    addCart,
    removeCart,
}

return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
)


}
export default StoreContextProvider