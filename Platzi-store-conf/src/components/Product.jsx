import React from "react";
import {v4 as uuidv4} from 'uuid';

const Product = ({product, handleAddToCart}) => {


    return (
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Product-iten-info">
                <h2>{product.title} <span>$ {product.price}</span></h2>
                <p>{product.description}</p>
            </div>
            <button 
                type="button"
                onClick={()=>handleAddToCart(product)}
            >Comprar</button>
        </div>
    )
}

export default Product
