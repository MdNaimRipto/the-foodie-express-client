import React from 'react';
import { Outlet } from "react-router-dom"

const Secondary = () => {
    return (
        <div className='min-h-screen'>
            <Outlet></Outlet>
        </div>
    );
};

export default Secondary;