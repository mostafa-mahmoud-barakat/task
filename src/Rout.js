import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './footer/Footer'
import Navbar from './Navbar/Navbar';
const Root = () => {


    return (
        <div>
            <Header />
            <Navbar/>
            <div><Outlet/></div>
            <Footer />
        </div>
    )
}

export default Root