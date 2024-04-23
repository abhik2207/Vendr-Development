import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser, signOutAsync } from '../authSlice';
import { Navigate } from 'react-router-dom';

export default function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);

    useEffect(() => {
        dispatch(signOutAsync());
    }, [dispatch]);

    return (
        <>
            {!user && <Navigate to='/login' replace={true} />}
        </>
    )
} 
