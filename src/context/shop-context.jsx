import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(null)


const getDefaultCart = () =>{
    let cart = {}
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0
        
    }
    return cart
}

export const ShopContextP = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const getTotalAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
            
        }
        return totalAmount
    }

    const addToCart = (itemid) => {
        setCartItems((previous) => ({...previous, [itemid]: previous[itemid] + 1}))
    }

    const removeFromCart = (itemid) => {
        setCartItems((previous) => ({...previous, [itemid]: previous[itemid] - 1}))
    }

    const updateCartItemCount = (newcount,itemid) => {
        setCartItems((previous) => ({...previous, [itemid]: newcount}))
    }

    const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalAmount}

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

    )
}