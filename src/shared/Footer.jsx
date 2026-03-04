import React from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-white text-lg font-semibold mb-4">
                            CS — Ticket System
                        </h2>
                        <p className="text-sm leading-relaxed">
                            CS — Ticket System is a modern support and issue tracking platform 
                            designed to streamline communication between teams and customers. 
                            Manage tickets efficiently, track progress in real-time, and deliver 
                            faster resolutions with a simple and user-friendly experience.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white">About Us</a></li>
                            <li><a className="hover:text-white">Our Mission</a></li>
                            <li><a className="hover:text-white">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white">Products & Services</a></li>
                            <li><a className="hover:text-white">Customer Stories</a></li>
                            <li><a className="hover:text-white">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Information</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white">Privacy Policy</a></li>
                            <li><a className="hover:text-white">Terms & Conditions</a></li>
                            <li><a className="hover:text-white">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Social Links</h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <a
                                    href="https://x.com/shadshs91"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-white transition-colors"
                                >
                                    <FaXTwitter />
                                    @CS — Ticket System
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/in/md-sahadot-hossen-shad-838251345/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-white transition-colors"
                                >
                                    <FaLinkedinIn />
                                    @CS — Ticket System
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.facebook.com/shadshs91"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-white transition-colors"
                                >
                                    <FaFacebookF />
                                    @CS — Ticket System
                                </a>
                            </li>

                            <li>
                                <a
                                    href="mailto:shadshs910@gmail.com"
                                    className="flex items-center gap-3 hover:text-white transition-colors"
                                >
                                    <FiMail />
                                    support@cst.com
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 my-10"></div>

                <div className="text-center text-sm text-gray-500">
                    © 2025 CS — Ticket System. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;