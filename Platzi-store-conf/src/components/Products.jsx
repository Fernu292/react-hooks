import React from 'react';
import Product from './Product';
import "../styles/components/Products.css";

const Products = ({Products}) => {
    return (
        <div>
            <div className="Products-items">
                {Products.map(product =>(
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products
