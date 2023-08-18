import React, { useState } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';


const Authorization = () => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <Register />
                <Login />
            </div>
        </>
    );
};

export default Authorization;