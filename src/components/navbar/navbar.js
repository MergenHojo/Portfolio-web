import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profilePic from '../../img/1.png'; // Kendi resim yolunuzu ekleyin

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-2xl font-bold">
                    Mergen Hojaberdiyew
                </Link>
                {/*  <div className="hidden md:flex space-x-6">
                    <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Men Barada</Link>
                    <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Işlerim</Link>
                    <Link to="/contacts" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Habarlaşmak</Link>
                    <Link to="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                    <Link to="/achievements" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Gazananlarym</Link>
                </div> */}
                <div className='flex'>
                    <div className="hidden md:flex space-x-2">
                        <Link
                            to="/about"
                            className={`${currentPath === '/about'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Men Barada
                        </Link>
                        <Link
                            to="/projects"
                            className={`${currentPath === '/projects'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Işlerim
                        </Link>
                        <Link
                            to="/contacts"
                            className={`${currentPath === '/contacts'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Habarlaşmak
                        </Link>
                        <Link
                            to="/blog"
                            className={`${currentPath === '/blog'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/achievements"
                            className={`${currentPath === '/achievements'
                                ? 'bg-gray-950 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } rounded-md px-3 py-2 text-lg font-medium`}
                        >
                            Gazananlarym
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex items-center ml-4">
                        <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                    </div>
                </div>
                {
                    isOpen && (
                        <div className="md:hidden">
                            <Link to="/about" className="block text-white py-2">Hakkımda</Link>
                            <Link to="/projects" className="block text-white py-2">Projeler</Link>
                            <Link to="/contacts" className="block text-white py-2">İletişim</Link>
                            <Link to="/blog" className="block text-white py-2">Blog</Link>
                            <Link to="/achievements" className="block text-white py-2">Kazandıklarım</Link>
                        </div>
                    )
                }

            </div>

        </nav>
    );
};

export default Navbar;
