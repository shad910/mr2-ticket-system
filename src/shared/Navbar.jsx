import React from "react";
import { FiPlus } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    return (
        <nav className="w-full bg-base-200 border-b border-base-300">
            <div className="md:max-w-7xl mx-auto px-2.5 md:px-4 sm:px-6 lg:px-8">
                <div className="navbar min-h-16">

                    {/* Left Side */}
                    <div className="navbar-start">
                        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 ">
                            CS — Ticket System
                        </h1>
                    </div>

                    {/* Center Side */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-sm text-gray-600 gap-2">
                            <li><a className="hover:text-black">Home</a></li>
                            <li><a className="hover:text-black">FAQ</a></li>
                            <li><a className="hover:text-black">Changelog</a></li>
                            <li><a className="hover:text-black">Blog</a></li>
                            <li><a className="hover:text-black">Download</a></li>
                            <li><a className="hover:text-black">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right Side*/}
                    <div className="navbar-end gap-2">

                        <button className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white border-none normal-case px-4">
                            <FiPlus className="mr-1 text-base" />
                            <span className="hidden sm:inline">New Ticket</span>
                        </button>

                        {/* Mobile Hamburger (Right Side) */}
                        <div className="dropdown dropdown-end lg:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-sm">
                                <HiMenu className="text-xl" />
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-sm"
                            >
                                <li><a>Home</a></li>
                                <li><a>FAQ</a></li>
                                <li><a>Changelog</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Download</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;