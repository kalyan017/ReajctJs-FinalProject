import { createContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";


export const CartContext = createContext();


const initialState = {
    cartItems: []
};


export default function CartProvider({children}){

    const [state, dispatch] = useReducer(
        cartReducer,
        initialState
    );


    return (

        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                dispatch
            }}
        >

            {children}

        </CartContext.Provider>

    );

}