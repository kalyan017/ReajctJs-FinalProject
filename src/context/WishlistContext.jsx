
import { createContext, useReducer } from "react";
import wishlistReducer from "../reducer/wishlistReducer";


export const WishlistContext = createContext();


const initialState = {
    wishlistItems: [],
};


export default function WishlistProvider({ children }) {


    const [state, dispatch] = useReducer(
        wishlistReducer,
        initialState
    );


    return (

        <WishlistContext.Provider

            value={{
                wishlistItems: state.wishlistItems,
                dispatch
            }}

        >

            {children}

        </WishlistContext.Provider>

    );

}