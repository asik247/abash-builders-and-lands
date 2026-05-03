import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const navLinkClass = ({ isActive }) =>
        `relative px-4 py-2 font-medium transition-all duration-300 rounded-full
        ${isActive
            ? 'bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg'
            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-400 hover:shadow-md'
        }`;

    const links = (
        <>
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/products" className={navLinkClass}>Products</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            <li><NavLink to="/auth" className={navLinkClass}>Login</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar px-4 lg:px-10 py-3 bg-white/80 backdrop-blur-md shadow-md border-b border-orange-100">

                {/* LEFT SIDE */}
                <div className="navbar-start">

                    {/* MOBILE MENU */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-orange-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-2xl w-56 space-y-2"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* LOGO */}
                    <div className="flex items-center gap-3">

                        <img
                            src={'/src/assets/logo-english.jpg'}
                            alt="logo"
                            className="w-[45px] sm:w-[50px] md:w-[55px] h-[45px] sm:h-[50px] md:h-[55px] rounded-full object-cover border-2 border-orange-400 shadow-lg"
                        />

                        <div className="leading-tight">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                                Abash Builders
                            </h2>

                            <p className="text-[10px] sm:text-xs text-gray-500">
                                Lands & Property Solutions
                            </p>
                        </div>
                    </div>
                </div>

                {/* CENTER MENU */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3">
                        {links}
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="navbar-end">
                    <button className="btn border-none text-white rounded-full px-6 bg-gradient-to-r from-orange-500 to-amber-400 hover:scale-105 transition duration-300 shadow-lg">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;