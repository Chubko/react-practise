import React from 'react';
import '../../styles.css';
import {useSelector} from "react-redux";


export const Header = (props) => {
    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({cart, wishlist}));
    const {priceTotalCart, priceTotalWishlist} = props;

    return(
        <header className='d-flex justify-between'>
            <h1>Welcome to our shop!</h1>

            <div className='d-flex justify-between'>
                <div className='mx-10 align-center' title={priceTotalWishlist}>wishlist: {wishlist.length}</div>
                <div className='mx-10 align-center' title={priceTotalCart}>cart: {cart.length}</div>
            </div>
        </header>
    )
}
