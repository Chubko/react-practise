import React from 'react';
import '../../styles.css';
import {ProductItem} from '../product-item';
import {useSelector, useDispatch} from "react-redux";

export const ProductList = ({products}) => {
    const dispatch = useDispatch();
    const onAddToWishlist = (products)=> {
        dispatch(toggleItemInWishlist(products));
    };
    const onAddToCart = (products)=> {
        dispatch(toggleItemInCart(products));
    };

    return(
        <div>
            {products.map((product)=> (
                <ProductItem onAddToWishlist={onAddToWishlist} onAddToCart={onAddToCart} product={product} key={product.id}/>
                ))}
        </div>
    )
}