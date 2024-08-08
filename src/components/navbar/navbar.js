import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../img/1.png'; // Kendi resim yolunuzu ekleyin

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-2xl font-bold">
                    Mergen Hojaberdiyew
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link to="/about" className="text-white hover:text-gray-400">Hakkımda</Link>
                    <Link to="/projects" className="text-white hover:text-gray-400">Projeler</Link>
                    <Link to="/contacts" className="text-white hover:text-gray-400">İletişim</Link>
                    <Link to="/blog" className="text-white hover:text-gray-400">Blog</Link>
                    <Link to="/achievements" className="text-white hover:text-gray-400">Kazandıklarım</Link>
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
            {isOpen && (
                <div className="md:hidden">
                    <Link to="/about" className="block text-white py-2">Hakkımda</Link>
                    <Link to="/projects" className="block text-white py-2">Projeler</Link>
                    <Link to="/contacts" className="block text-white py-2">İletişim</Link>
                    <Link to="/blog" className="block text-white py-2">Blog</Link>
                    <Link to="/achievements" className="block text-white py-2">Kazandıklarım</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
