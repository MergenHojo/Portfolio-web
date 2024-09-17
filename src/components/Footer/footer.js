import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2">Mergen Hojaberdiyev</h2>
                        <p className="text-gray-400">Front-End Developer & AI Enthusiast</p>
                    </div>
                    <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://www.linkedin.com/in/mergen-hojaberdiyew-244438325"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-200"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a
                            href="https://github.com/MergenHojo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-200"
                        >
                            <FaGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/mergen___hojaberdiyew/"
                            className="text-gray-400 hover:text-white transition duration-200"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-gray-500">© {new Date().getFullYear()} Mergen Hojaberdiyev. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
