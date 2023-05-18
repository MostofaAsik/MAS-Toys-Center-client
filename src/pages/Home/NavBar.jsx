/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const nav = <>
        <li><Link>Home</Link></li>
        <li><Link>Blogs</Link></li>
        <li><Link>All Toys</Link></li>
        <li><Link>LogIn</Link></li>
        <li><Link>Register</Link></li>



    </>

    return (
        <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500 h-28 mb-3">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li> */}
                        {nav}
                    </ul>
                </div>
                <img className='w-20 h-20 p-4 rounded-full' src="https://rukminim1.flixcart.com/image/416/416/k5pn6vk0/vehicle-pull-along/9/f/p/lamborghini-centenario-1-32-scale-diecast-metal-alloy-pull-back-original-imafgtwjp7mnnahh.jpeg?q=70" alt="" />
                <div className=''>
                    <h2 className='text-2xl md:text-4xl text-indigo-700 hover:bg-gradient-to-r from-[#c33634] to-[#48c334] '>MAS TOYS CENTER</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li> */}
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>

        </div>
    );
};

export default NavBar;