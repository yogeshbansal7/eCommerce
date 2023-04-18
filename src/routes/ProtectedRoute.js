import React from 'react'
import useAuth from '../custom-hooks/useAuth'
import { Navigate } from 'react-router-dom'

import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const {currentUser} = useAuth()

    return currentUser ? <Outlet /> : <Navigate to='/login' />

}


export default ProtectedRoute
