import React, { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { activateAcounnt, signin } from '../../../auth';

const ActivateAccountPage = () => {
    const {token} = useParams()
    const active = {token:token}
    useEffect(()=>{
        activateAcounnt(active)
            .then(data=>{
                return <Redirect to="/login" ></Redirect>
        })
    },[])
    return (
        <div>
            {token}
            WELCOME TO WEBSITE
        </div>
    )
}

export default ActivateAccountPage
