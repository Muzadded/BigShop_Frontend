import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({children}) =>  {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const value = {
        isCartOpen
    }

    return  <CartContext.Provider value = {value}> {children} </CartContext.Provider>
}