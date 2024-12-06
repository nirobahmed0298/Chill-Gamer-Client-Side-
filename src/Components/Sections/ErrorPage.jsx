import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[100vh]'>
                <h1 className='text-red-500 text-4xl'>Page Not Found</h1>
                <br />
                <Link to='/' className='btn'><FaArrowCircleLeft></FaArrowCircleLeft>Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;