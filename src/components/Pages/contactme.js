/* import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaImo } from 'react-icons/fa';
import Navbar from '../navbar/navbar';
import ProfilePicture from '../../img/1.png'; // Update with your profile image
import Footer from '../Footer/footer';

const ContactMe = () => {
    return (
        <>
            <Navbar />

            <div className="bg-gray-900 text-gray-300 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center mb-8">
                        <div className="w-full md:w-1/3">
                            <img
                                src={ProfilePicture}
                                alt="Profile"
                                className="w-full h-auto rounded-lg border border-white shadow-xl object-cover"
                            />
                        </div>
                        <div className="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Contact Me
                            </h1>
                            <p className="text-lg text-gray-400 mb-4">
                                Feel free to reach out to me through any of the following platforms:
                            </p>
                            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
                                <a href="mailto:merryhojo@gmail.com" className="flex items-center text-gray-400 hover:text-white transition duration-200">
                                    <FaEnvelope className="text-3xl mr-4 text-white" />
                                    <span className="text-xl">merryhojo@gmail.com</span>
                                </a>
                                <a href="https://instagram.com/mergen___hojaberdiyew" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition duration-200">
                                    <FaInstagram className="text-3xl mr-4" />
                                    <span className="text-xl">Instagram</span>
                                </a>
                                <a href="https://github.com/merryhojo" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition duration-200">
                                    <FaGithub className="text-3xl mr-4" />
                                    <span className="text-xl">GitHub</span>
                                </a>
                                <a href="https://imo.im/+99361088121" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition duration-200">

                                    <span className="text-xl">IMO: +99361088121</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>
                        <form action="#" method="post" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactMe;
 */





















































/* 
import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';

const ContactMe = () => {
    return (
        <>
            <Navbar />

            <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-gray-100 min-h-screen py-12">
                <div className="container mx-auto px-4">
                
                    <div className="text-center mb-12">
                        <h1 className="text-6xl font-extrabold text-white mb-4">Get in Touch</h1>
                        <p className="text-xl text-gray-300">I'd love to hear from you! Connect with me through the channels below.</p>
                    </div>

                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center flex-col">
                            <FaEnvelope className="text-5xl text-blue-500 mb-4" />
                            <h3 className="text-2xl font-semibold text-white mb-2">Email</h3>
                            <p className="text-lg text-gray-400">merryhojo@gmail.com</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center flex-col">
                            <FaInstagram className="text-5xl text-pink-500 mb-4" />
                            <h3 className="text-2xl font-semibold text-white mb-2">Instagram</h3>
                            <p className="text-lg text-gray-400">@mergen___hojaberdiyew</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center flex-col">
                            <FaGithub className="text-5xl text-gray-300 mb-4" />
                            <h3 className="text-2xl font-semibold text-white mb-2">GitHub</h3>
                            <p className="text-lg text-gray-400">github.com/merryhojo</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center flex-col">
                            <FaPhone className="text-5xl text-green-400 mb-4" />
                            <h3 className="text-2xl font-semibold text-white mb-2">IMO</h3>
                            <p className="text-lg text-gray-400">+99361088121</p>
                        </div>
                    </div>

                  
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                        <h2 className="text-4xl font-bold text-white mb-6">Send a Message</h2>
                        <form action="#" method="post" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full p-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactMe;
 */




































import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import Navbar from '../navbar/navbar';
import ProfilePicture from '../../img/1.png'; // Update with your profile image
import Footer from '../Footer/footer';


const ContactMe = () => {
    return (
        <>
            <Navbar />


            <div className="bg-gray-900 text-gray-300 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="
                     bg-gray-800
                    flex flex-col md:flex-row items-center  p-8 rounded-lg shadow-xl mb-8">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <img
                                src={ProfilePicture}
                                alt="Profile"
                                className="w-full h-auto rounded-lg border border-white shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-2/3 md:pl-8">
                            <div className="text-center mb-12">
                                <h1 className="text-6xl font-extrabold text-white mb-4">Contact Me</h1>
                                <p className="text-xl text-gray-300">I'd love to hear from you! Connect with me through the channels below.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                    <FaEnvelope className="text-3xl text-blue-500" />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Email</h2>
                                        <p className="text-gray-400">merryhojo@gmail.com</p>
                                    </div>
                                </div>
                                <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                    <FaInstagram className="text-3xl text-pink-600" />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Instagram</h2>
                                        <p className="text-gray-400">@mergen___hojaberdiyew</p>
                                    </div>
                                </div>
                                <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                    <FaGithub className="text-3xl text-gray-400" />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">GitHub</h2>
                                        <p className="text-gray-400">github.com/merryhojo</p>
                                    </div>
                                </div>

                                <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                    <FaPhone className="text-3xl text-blue-500 " />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">IMO</h2>
                                        <p className="text-gray-400">+99361088121</p>
                                    </div>
                                </div>
                                <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                                    <FaLinkedin className="text-4xl text-blue-500 " />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">LinkedIn</h2>
                                        <p className="text-gray-400">mergenhojaberdiyew</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>
                        <form action="#" method="post" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactMe;
