/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Home/NavBar';
import Footer from '../pages/Footer';

const MainLayout = () => {
    return (
        <div>

            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-100px)]">

                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;