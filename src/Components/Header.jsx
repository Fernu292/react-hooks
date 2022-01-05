import React, {useState, useContext} from 'react';
import {ThemeContext} from '../Context/ThenContext';

const Header = () => {

    const {color, ThemeTransform} = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(false);
      const handleClick = ()=>{
        setDarkMode(!darkMode);
    }
    ThemeTransform(darkMode);
    return ( 
        <header className='Header'>
            <h1 style={{color}}>React Hooks</h1>
            <button 
                type='button'
                onClick={handleClick}
                className='btn-mode'
            >{darkMode ? 'DarkMode' : "LightMode"}</button>
        </header>
    );
}
 
export default Header;