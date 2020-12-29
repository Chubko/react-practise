import React from 'react';
import '../../styles.css';


export const Header = (props) => {

    return(
        <header className='d-flex justify-between'>
            <h1>Welcome to our shop!</h1>

            <div className='d-flex justify-between'>
                <div className='mx-10 align-center'>wishlist: </div>
                <div className='mx-10 align-center'>cart: </div>
            </div>
        </header>
    )
}
