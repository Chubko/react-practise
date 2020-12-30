import React, {useEffect, useMemo} from 'react';
import './styles.css';
import {useDispatch, useSelector} from "react-redux";
import {ProductList} from "./components/product-list";
import {setProducts} from "./redux/action-creators";
import {Header} from "./components/header";


export default function App()  {
    const {cart, wishlist, products} = useSelector(
        ({ cart:{cart}, wishlist:{wishlist}, products:{products} }) => ({
            cart,
            wishlist,
            products
    })
    );
    const dispatch = useDispatch();

    const priceTotalCart = useMemo(() => {
        return cart.reduce((acc, value) => acc += value.price, 0);
    }, [cart]);
    const priceTotalWishlist= useMemo(() => {
        return wishlist.reduce((acc, value) => acc += value.price, 0);
    }, [wishlist]);



    // const fetchData = useCallback(async() => {
    //     const response = await productsService.getProducts();
    //     const json = await response.json();
    //     dispatch(setProducts(json));
    // }, []);

    useEffect(()=>{
        // fetchData();
        dispatch(setProducts());
    }, []);

        return(
            <div className='App'>
                <Header priceTotalCart={priceTotalCart} priceTotalWishlist={priceTotalWishlist}/>
                <ProductList products={products}/>
            </div>
    )
}

