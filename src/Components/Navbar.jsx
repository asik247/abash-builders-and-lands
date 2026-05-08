import React, { useState } from 'react';
import { NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [open, setOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `relative px-4 py-2 font-medium transition-all duration-300 rounded-full
        ${isActive
            ? 'bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg'
            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-400 hover:shadow-md'
        }`;

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged out");
                setOpen(false);
            })
            .catch(err => console.log(err.message));
    };

    const links = (
        <>
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/products" className={navLinkClass}>Products</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar px-4 lg:px-10 py-3 bg-white/80 backdrop-blur-md shadow-md border-b border-orange-100">

                {/* LEFT */}
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            ☰
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 p-3 bg-white rounded-2xl shadow-xl w-56">
                            {links}
                        </ul>
                    </div>

                    <h2 className="text-xl font-bold text-orange-500">
                        Abash Builders
                    </h2>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3">
                        {links}
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end relative">

                    {user ? (
                        <div className="relative">
                            {/* Avatar */}
                            <img
                                onClick={() => setOpen(!open)}
                                src={user?.photoURL}
                                alt="user"
                                className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer"
                            />

                            {/* Dropdown */}
                            {open && (
                                <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-xl border p-3 space-y-2 z-50">

                                    <p className="text-sm font-semibold text-gray-700 border-b pb-2">
                                        {user?.displayName || "User"}
                                    </p>

                                    <NavLink
                                        to="/"
                                        onClick={() => setOpen(false)}
                                        className="block px-3 py-2 rounded-lg hover:bg-orange-100 text-gray-700"
                                    >
                                        ⭐ Add Review
                                    </NavLink>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-100 text-red-500 font-medium"
                                    >
                                        🚪 Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <NavLink to="/auth" className={navLinkClass}>
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;