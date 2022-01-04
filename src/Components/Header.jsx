import React, {useState} from 'react';

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleClick = ()=>{
        setDarkMode(!darkMode);
    }

    return ( 
        <header className='Header'>
            <h1>React Hooks</h1>
            <button 
                type='button'
                onClick={handleClick}
                className='btn-mode'
            >{darkMode ? 'DarkMode' : "LightMode"}</button>
        </header>
    );
}
 
export default Header;