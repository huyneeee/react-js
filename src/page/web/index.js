import React from 'react'
import Footer from '../../components/Layout/Footer'
import Navigation from '../../components/Layout/Navigation'

const Website = ({children}) => {
    return (
        <div>
            <Navigation></Navigation>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default Website
