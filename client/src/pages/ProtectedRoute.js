import React,{Children, useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { PriceContext } from '../contexts/appContext'


const ProtectedRoute = ({children}) => {
    const { user } = useContext(PriceContext)
    if (!user) {
        return <Navigate to='/register' />
    }
    return children;
}

export default ProtectedRoute