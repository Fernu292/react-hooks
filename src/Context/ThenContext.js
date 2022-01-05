import React from 'react';

export const ThemeContext = React.createContext(null);

const ThemeContextProvider = ({children})=>{
    const color = 'green';
    return (
        <ThemeContext.Provider
            value={{
                color
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;