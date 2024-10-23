import React from 'react'

import { Outlet, useNavigate  } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();
    
    return (
        <>
        <div className='paginasHome'>
            <nav className='flex-conteiner'>
                <button className='flex-item' onClick={() => navigate("/")}>HOME</button>
                <button className='flex-item' onClick={() => navigate("/login")}>LOGIN</button>
                <button className='flex-item' onClick={() => navigate("/cadastrar")}>CADASTRAR</button>
                <button className='flex-item' onClick={() => navigate("/playlist")}>PLAYLIST</button>
            </nav>
        </div>

        <Outlet />
        </>
    )
};

export default Layout;
