import React from 'react';
import Header from '../Sections/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sections/Footer';
const Root = () => {
    return (
        <div className='dark:bg-black dark:text-white'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;