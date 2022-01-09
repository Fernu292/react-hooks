import React from 'react';

export const ThemeContext = React.createContext(null);

const ThemeContextProvider = ({children})=>{
    const color = 'green';

    const ThemeTransform = (darkMode)=>{
        
        if(darkMode){
            document.querySelector('html').classList.add('darkMode');
        }else{
            document.querySelector('html').classList.remove('darkMode');
        }
    }
    return (
        <ThemeContext.Provider
            value={{
                color,
                ThemeTransform
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;