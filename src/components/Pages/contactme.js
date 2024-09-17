import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import Navbar from '../navbar/navbar';
import ProfilePicture from '../../img/1.png';
import Footer from '../Footer/footer';
import emailjs from 'emailjs-com';
import ChatBox from './chatbot/chatbox';
const ContactMe = () => {
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0slxd7r', 'template_2im0ibj', e.target, 'i0AO39mLg6mn5HDV8')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                setTimeout(() => {
                    setMessageSent(false);
                }, 5000); // 5 sekunt
            }, (error) => {
                console.log(error.text);
                setMessageSent(false);
            });

        e.target.reset();
    };
    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-gray-300 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-800 flex flex-col md:flex-row items-center p-8 rounded-lg shadow-xl mb-8">
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
                                <div
                                    className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-600 hover:cursor-pointer"
                                    onClick={() => window.location.href = "mailto:amannazarovichmergen@gmail.com"}
                                >
                                    <FaEnvelope className="text-3xl text-blue-500" />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Email</h2>
                                        <p className="text-gray-400">amannazarovichmergen@gmail.com</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-600 hover:cursor-pointer"
                                    onClick={() => window.open("https://www.instagram.com/mergen___hojaberdiyew", "_blank")}
                                >
                                    <FaInstagram className="text-3xl text-pink-600" />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Instagram</h2>
                                        <p className="text-gray-400">@mergen___hojaberdiyew</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-600 hover:cursor-pointer"
                                    onClick={() => window.open("https://github.com/MergenHojo", "_blank")}
                                >
                                    <FaGithub className="text-3xl text-gray-400" />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">GitHub</h2>
                                        <p className="text-gray-400">github.com/merryhojo</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-600 hover:cursor-pointer"
                                    onClick={() => window.open("https://wa.me/99361088121", "_blank")}
                                >
                                    <FaPhone className="text-3xl text-blue-500" />
                                    <div>
                                        <h2 className="text-xl font-bold text-white">IMO</h2>
                                        <p className="text-gray-400">+99361088121</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-600 hover:cursor-pointer"
                                    onClick={() => window.open("https://www.linkedin.com/in/mergen-hojaberdiyew-244438325", "_blank")}
                                >
                                    <FaLinkedin className="text-4xl text-blue-500" />
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
                        {messageSent && (
                            <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                                Message üsdünlikli ugradyldy!
                            </div>
                        )}
                        <form onSubmit={sendEmail} className="space-y-6">
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
                <ChatBox />
            </div>
            <Footer />
        </>
    );
};

export default ContactMe;
