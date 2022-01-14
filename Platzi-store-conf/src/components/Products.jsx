import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import Product from './Product';
import "../styles/components/Products.css";

const Products = () => {
    const { state, addToCart } = useContext(AppContext);
    const Products= state.products;

    const handleAddToCart = (product)=>{
        addToCart(product);
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
