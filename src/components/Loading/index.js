import React from 'react';
const Loading = () => {
    return (
            <div className=" fixed top-0 right-0 z-10 flex justify-center items-center w-screen h-screen bg-white ">

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx={50} cy={50} r={32} strokeWidth={8} stroke="#346b21" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50" />
                </circle>
                <circle cx={50} cy={50} r={23} strokeWidth={8} stroke="#94d137" strokeDasharray="36.12831551628262 36.12831551628262" strokeDashoffset="36.12831551628262" fill="none" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50" />
                </circle></svg>

        </div>
    )
}
 
export default Loading
