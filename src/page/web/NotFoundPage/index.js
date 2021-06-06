import React from 'react'

const NotFoundPage = () => {
    return (
        <div className="bg-cover bg-center w-screen h-screen " style={{ backgroundImage: 'url(https://38.media.tumblr.com/546c0cd48d71f210f9b67a389003790d/tumblr_neq0yw9rMA1tm16jjo1_500.gif)' }}>
            <div className=" flex  justify-center  h-full py-56">
                <div className="w-96 text-center h-96 ">
                    <p className="text-9xl font-extrabold tracking-widest text-gray-300 mb-10 ">404</p>
                    <p className="text-3xl font-bold text-gray-300">Page not found <i className="far fa-frown" /></p>
                </div>
            </div>
        </div>

    )
}

export default NotFoundPage
