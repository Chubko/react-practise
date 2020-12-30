import React from 'react';
import '../../styles.css';
import {ProductItem} from '../product-item';
import {useSelector, useDispatch} from "react-redux";
import {cartActionCreator, wishlistActionCreator} from "../../redux/action-creators";

export const ProductList = ({products}) => {
    const dispatch = useDispatch();
    const {wishlist, cart} = useSelector(({wishlist: {wishlist}, cart: {cart}}) =>({
            wishlist,
            cart
    }));

    const onAddToWishlist = (products)=> {
        dispatch(wishlistActionCreator(products));
    };
    const onAddToCart = (products)=> {
        dispatch(cartActionCreator(products));
    };

    return(
        <div>
            {products.map((product)=> (
                <ProductItem
                    isAddedToWishList={!!wishlist.find(({id}) => id === product.id)}
                    isAddedToCart={!!cart.find(({id}) => id === product.id)}
                    onAddToWishlist={onAddToWishlist}
                    onAddToCart={onAddToCart}
                    product={product}
                    key={product.id}/>
                ))}
        </div>
    )
}