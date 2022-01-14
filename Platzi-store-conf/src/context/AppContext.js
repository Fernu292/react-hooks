import React, {createContext, useState} from 'react';
//Custome hook 
import useInitialState from '../hooks/useInitialState';

export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const {state, addToCart, removeFromCart} = useInitialState();

    return(
        <AppContext.Provider
            value={{
                state,
                addToCart, 
                removeFromCart

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;