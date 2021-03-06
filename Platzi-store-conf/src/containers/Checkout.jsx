import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "../styles/components/Checkout.css";

const Checkout = () => {
    const { cart, removeFromCart, handleSumTotal } = useContext(AppContext);

    const handleRemove = product =>{
        removeFromCart(product);
    }

    const sumTotal = handleSumTotal();

    return ( 
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>{cart.length > 0 ? "Lista de productos": "Agrega productos a tu carrito"}</h3>

                {cart.map( (item, index) => (
                    <div className="Checkout-item" key={index}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>{`$ ${item.price}`}</span>
                        </div>
                        <button type='button' onClick={()=>handleRemove(item)}>
                            <i className='fas fa-trash' title='Eliminar'></i>
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>Precio total: {`$ ${sumTotal}`}</h3>
                    <Link to={"/checkout/information"}>
                        <button type='button'>Continuar pedido</button>
                    </Link>
                </div>
            )}
            
        </div>
    );
}
 
export default Checkout;