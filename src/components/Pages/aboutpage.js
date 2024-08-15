
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHtml5, FaReact, FaJava, FaTools, FaAndroid, FaJs, FaGitAlt } from 'react-icons/fa';
import Navbar from '../navbar/navbar';
import ProfilePicture from '../../img/2.png'; // Update the path to your image
import { SiFlutter, SiAutodesk, SiTailwindcss, SiPostman } from 'react-icons/si';
import Footer from '../Footer/footer';


const AboutPage = () => {
    return (
        <>
            <Navbar />

            <div className="bg-gray-900 text-gray-300 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-8">
                        <div className="w-full md:w-1/3">
                            <img
                                src={ProfilePicture}
                                alt="Profile"
                                className="w-full h-auto rounded-lg object-cover shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Mergen Hojaberdiyev
                            </h1>
                            <p className="text-xl text-gray-400 mb-4">
                                Teacher & Front-End Developer & AI Enthusiast
                            </p>
                            <div className="flex justify-center md:justify-start space-x-4 mb-6">
                                <FaLinkedin className="text-2xl text-gray-400 hover:text-white transition duration-200" />
                                <FaGithub className="text-2xl text-gray-400 hover:text-white transition duration-200" />
                                <FaEnvelope className="text-2xl text-gray-400 hover:text-white transition duration-200" />
                            </div>
                            <p className="text-lg leading-relaxed">
                                Mergen Hojaberdiýew Amannazarowiç, Magtymguly adyndaky Türkmen Döwlet Uniwersitetiniň Maglumat tehnologiýalary fakultetiniň Amaly matematika we informatika hünärini tamamlan.
                            </p>
                            <p className="text-lg leading-relaxed mt-4">
                                Yzygiderlikde 3dsMax, Autocad, Xd Design, Android Studio (Java), Flutter, Javascript, React.js öwrenen.
                            </p>
                            <p className="text-lg leading-relaxed mt-4">
                                Häzirki wagtda mugallym we front-end developer, React.js bilen işleýarin. AI ulanmakda höwesjeň.
                            </p>
                            <div className="flex justify-center md:justify-start mt-6 space-x-4">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">Gazananlarym</button>
                                <button className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition duration-200">Işlerim</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <FaJs className="text-yellow-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">JavaScript</h2>
                                <p className="text-lg text-gray-400">Web Development</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <FaReact className="text-blue-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">React.js</h2>
                                <p className="text-lg text-gray-400">Frontend Development</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <SiTailwindcss className="text-teal-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">TailwindCSS</h2>
                                <p className="text-lg text-gray-400">CSS Framework</p>
                            </div>
                        </div>


                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <FaGitAlt className="text-red-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Git</h2>
                                <p className="text-lg text-gray-400">Version Control</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <SiPostman className="text-orange-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Postman</h2>
                                <p className="text-lg text-gray-400">API Testing</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <FaHtml5 className="text-orange-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">HTML</h2>
                                <p className="text-lg text-gray-400">Web Development</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <FaAndroid className="text-green-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Android Studio</h2>
                                <p className="text-lg text-gray-400">Mobile Development</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <FaJava className="text-red-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Java</h2>
                                <p className="text-lg text-gray-400">Android Development</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <SiFlutter className="text-blue-400 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Flutter</h2>
                                <p className="text-lg text-gray-400">Cross-Platform Development</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <FaTools className="text-gray-500 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Xd Design</h2>
                                <p className="text-lg text-gray-400">UI/UX Design</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <SiAutodesk className="text-blue-300 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">3dsMax</h2>
                                <p className="text-lg text-gray-400">3D Modeling</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
                            <SiAutodesk className="text-blue-300 text-6xl md:text-7xl mr-6" />
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">AutoCAD</h2>
                                <p className="text-lg text-gray-400">2D/3D Design</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default AboutPage;
