import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { activateAcounnt } from '../../../auth';
const ActivateAccountPage = () => {
    const { token } = useParams()
    const active = { token: token }
    useEffect(() => {
        activateAcounnt(active)
            .then(data => {
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="my-10 w-full text-center text-main">
            <p className="text-lg font-semibold  mt-10">
                WELCOME TO WEBSITE
            </p>
            <p className="text-md my-4">Bạn có thể đăng nhập để trải nghiệm dịch vụ website của chúng tôi</p>
            <Link to="/login">Tại đây</Link>
        </div>
    )
}

export default ActivateAccountPage
