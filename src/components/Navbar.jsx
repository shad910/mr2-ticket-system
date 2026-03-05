import React from "react";
import { FiPlus } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    return (
        <nav className="w-full bg-base-100 border-b border-base-300">
            <div className="md:w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-14">

                    {/* Left: Logo */}
                    <h1 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                        CS — Ticket System
                    </h1>

                    {/* Right: Menu + Button */}
                    <div className="flex items-center gap-2.5 md:gap-3.5 lg:gap-4 xl:gap-6 ml-auto">

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
                            <li><a className="hover:text-black transition-colors">Home</a></li>
                            <li><a className="hover:text-black transition-colors">FAQ</a></li>
                            <li><a className="hover:text-black transition-colors">Changelog</a></li>
                            <li><a className="hover:text-black transition-colors">Blog</a></li>
                            <li><a className="hover:text-black transition-colors">Download</a></li>
                            <li><a className="hover:text-black transition-colors">Contact</a></li>
                        </ul>

                        <button className="btn btn-xs sm:btn-sm md:btn-sm bg-linear-65 from-[#422AD5] to-purple-500 text-white border-none normal-case px-4">
                            <FiPlus className="mr-1 text-base" />
                            <span className="hidden sm:inline">New Ticket</span>
                        </button>

                        {/* Mobile Hamburger */}
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