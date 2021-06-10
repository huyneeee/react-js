import React, { useState } from 'react'
import { useLocation } from 'react-router'
import CartMini from '../../components/Layout/CartMini'
import Footer from '../../components/Layout/Footer'
import Navigation from '../../components/Layout/Navigation'
import Loading from '../../components/Loading'

const Website = ({ children, user, url, logout, loading }) => {
    const { pathname } = useLocation();
    if (pathname === '/') {
        url(pathname);
    }
    const [showCart, setShowCart] = useState(false);

    const onHandleClickCart = (e) => {
        setShowCart(!showCart)
    }

    return (
        <>
            { loading
            ? <Loading /> 
            :
                <div className="overflow-hidden">
                    <CartMini showCart={showCart} handleClickCart={onHandleClickCart} ></CartMini>
                    <Navigation user={user} logout={logout} handleClickCart={onHandleClickCart}></Navigation>
                    {children}
                    <Footer></Footer>
                </div>
            }

        </>
    )
}

export default Website
