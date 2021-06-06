import React from 'react'
import { useLocation } from 'react-router'
import Footer from '../../components/Layout/Footer'
import Navigation from '../../components/Layout/Navigation'

const Website = ({children,user, url}) => {
    const { pathname } = useLocation();
    if(pathname==='/'){
        url(pathname);       
    }
    return (
        <div>
            <Navigation user={user}></Navigation>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default Website
