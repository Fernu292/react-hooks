import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import Product from './Product';
import "../styles/components/Products.css";
import {v4 as uuidv4} from 'uuid';

const Products = () => {
    const { state, addToCart, cart} = useContext(AppContext);
    const Products= state.products;

    const handleAddToCart = (product)=>{
        const idCart = uuidv4();
        const newProduct = {...product, cartId: idCart};
        addToCart(newProduct);
    }


    return (
        <div>
            <div className="Products-items">
                {Products.map(product =>(
                    <Product 
                        key={product.id} 
                        product={product} 
                        handleAddToCart = {handleAddToCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products
