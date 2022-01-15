import React, {createContext, useEffect} from 'react';
import {v4 as uuidv4} from "uuid";
//Custome hook 
import useInitialState from '../hooks/useInitialState';

export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const {state, addToCart, removeFromCart, addToBuyer, addNewOrder} = useInitialState();
    const { cart } = state;
    
    const handleSumTotal = ()=>{
        const reducer = (acumulator, currentValue) => acumulator+currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return(
        <AppContext.Provider
            value={{
                state,
                cart,
                addToCart, 
                addToBuyer,
                removeFromCart,
                addNewOrder,
                handleSumTotal,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;