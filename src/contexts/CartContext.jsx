import { createContext, useContext, useState } from "react";

export const CartContext= createContext ([])

export const useCartContext = () => useContext (CartContext)
export const CartContextProvider= ({children}) => {

    const [cartList, setCartlist] = useState([])
    const addTocart = (product) => {
        setCartlist ([
            ...cartList,
            product
        ])
    }

    return (
        <CartContext.Provider value= {{
            cartList,
            addTocart
        }}>
            {children}
        </CartContext.Provider>
    )
}