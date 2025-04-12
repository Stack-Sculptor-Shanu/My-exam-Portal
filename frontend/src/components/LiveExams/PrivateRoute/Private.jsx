import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import axiosInstance from '../../../Utilities/axiosInstance';

const Private = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [auth,setAuth] = useState(false)
    useEffect(()=>{
        axiosInstance.get('/findme').then((response)=>{
            const data = response.data
            console.log(data)
            setAuth(true),
            setLoading(false)
        }).catch(()=>{
            setAuth(false),
            setLoading(false)
        },[])
    })
    if(loading) return <p>loading...</p>
    return auth?children : <Navigate to = '/login'/>
    // const navigate = useNavigate();
//     const token=Cookies.get("verification_token")
// return token?children:<Navigate to="/"/>
}

export default Private;