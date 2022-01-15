import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { AppContext } from '../context/AppContext';

import "../styles/components/Payment.css";



const Payment = () => {

    const {state, handleSumTotal, addNewOrder} = useContext(AppContext);
    const {cart, buyer} = state;
    const sumTotal = handleSumTotal();
    const Navigate = useNavigate();

    const paypalOptions = {
        clientId: String(process.env.CLIENT_ID),
        intent: 'capture',
        currency: "USD"
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = data =>{
        console.log(data);
        if(data.status==='COMPLETED'){
            const newOrder = {
                buyer,
                products : cart,
                payment: data
            }
            addNewOrder(newOrder);
            Navigate("/checkout/success");
        }
    }

    return ( 
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>

                {cart.map( item =>(
                    <div className="Payment-item" key={item.cartID}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                
                <div className="Payment-button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={sumTotal}
                        onSuccess={(data)=> handlePaymentSuccess(data)}
                        onError={(error)=>console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                </div>
            </div>

            <div></div>
        </div>
    );
}
 
export default Payment;