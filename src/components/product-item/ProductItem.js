import React from 'react';

export const ProductItem = ({
                                onAddToWishlist,
                                onAddToCart,
                                product,
                                product: { id, title, price, description }}) => {

    return(
        <div>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{description}</h5>
            <button onClick={() => onAddToWishlist(product)}>add to wishlist</button>
            <button onClick={() => onAddToCart(product)}>add to cart</button>
            <hr/>
        </div>
    )
}