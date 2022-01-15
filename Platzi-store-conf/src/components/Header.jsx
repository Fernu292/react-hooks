import React, {useContext, useEffect} from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import "../styles/components/Header.css";

const Header = () => {

    const { cart } = useContext(AppContext);
    
    return (
        <header className='Header'>
            <h1 className='Header-title'>
                <Link to={"/"}>PlatziConf Merge</Link>
            </h1>

            <div className="Header-checkout">
                <Link to={"/checkout"}>
                    <i className='fas fa-shopping-basket' />
                </Link>
                {cart.length > 0 && 
                    <div className='Header-alert'>
                        {cart.length}
                    </div>
                }
            </div>
        </header>
    )
}
export default Header;