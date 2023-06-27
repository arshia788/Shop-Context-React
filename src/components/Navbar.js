import React from 'react';

import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='bg-blue-700 text-white py-2 px-3
        flex justify-between items-center
        '>
            <h1 className='text-3xl font-bold'>shop</h1>

            <FaShoppingBag 
            className='text-xl'
            />
        </nav>
    );
};

export default Navbar;