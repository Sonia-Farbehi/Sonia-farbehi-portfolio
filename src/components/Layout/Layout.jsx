import React from 'react';
import './Layout.scss';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Topbar from '../TopBar/Topbar';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar/>
            <Topbar/>
            <div className="page">

                <Outlet />
               
            </div>
        </div>
    );
};

export default Layout;