import React from 'react';

export const ProductItem = ({
                                isAddedToWishList,
                                isAddedToCart,
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
            <button
                style={{background: isAddedToWishList ? 'red' : 'green'}}
                onClick={() => onAddToWishlist(product)}>
                {isAddedToWishList ? 'remove from wishlist' : 'add to wishlist'}
            </button>
            <button
                style={{background: isAddedToCart ? 'red' : 'green'}}
                onClick={() => onAddToCart(product)}>
                {isAddedToCart ? 'remove from cart' : 'add to cart'}
            </button>
            <hr/>
        </div>
    )
}