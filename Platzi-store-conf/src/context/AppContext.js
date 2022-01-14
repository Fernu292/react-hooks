import React, {createContext, useEffect} from 'react';
import {v4 as uuidv4} from "uuid";
//Custome hook 
import useInitialState from '../hooks/useInitialState';

export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const {state, addToCart, removeFromCart} = useInitialState();
    const { cart } = state;
    
    

    return(
        <AppContext.Provider
            value={{
                state,
                cart,
                addToCart, 
                removeFromCart

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;