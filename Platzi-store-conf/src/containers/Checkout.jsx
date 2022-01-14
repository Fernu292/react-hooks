import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "../styles/components/Checkout.css";

const Checkout = () => {
    const { cart, removeFromCart } = useContext(AppContext);

    const handleRemove = product =>{
        removeFromCart(product);
    }

    return ( 
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de Pedidos:</h3>

                {cart.map( item => (
                    <div className="Checkout-item" key={item.id}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>{`$ ${item.price}`}</span>
                        </div>
                        <button type='button' onClick={handleRemove}>
                            <i className='fas fa-trash' title='Eliminar'></i>
                        </button>
                    </div>
                ))}
            </div>

            <div className="Checkout-sidebar">
                <h3>Precio total: $10</h3>
                <Link to={"/checkout/information"}>
                    <button type='button'>Continuar pedido</button>
                </Link>
            </div>
        </div>
    );
}
 
export default Checkout;