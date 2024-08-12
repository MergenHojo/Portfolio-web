/* import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import image from '../../img/1.png'
const blogPosts = [
    {
        id: 1,
        title: 'Exploring the World of Frontend Development',
        description: 'A deep dive into the latest frontend technologies and how to leverage them in your projects.',
        image: 'https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?w=360&t=st=1691768052~exp=1691768652~hmac=760f1a59452b8a31f371243fa0dacc49e83e51028b18ac24b040139c3c735445',
        date: 'August 12, 2024',
    },
    {
        id: 2,
        title: 'Understanding ReactJS Hooks',
        description: 'An introduction to ReactJS Hooks and how they can simplify your state management.',
        image: 'https://img.freepik.com/free-photo/react-website-design-mobile-application-with-node-js_23-2150095276.jpg?w=360&t=st=1691768100~exp=1691768700~hmac=3de325e00bc9fcb4e27a9bb502be48d22f8e4b1a1d46f5c8f2d83af00d87229e',
        date: 'July 25, 2024',
    },
    {
        id: 3,
        title: 'TailwindCSS: Designing with Utility-First',
        description: 'Learn how TailwindCSS makes designing faster and more intuitive.',
        image: 'https://img.freepik.com/free-photo/top-view-laptop-with-copy-space_23-2148367643.jpg?w=360&t=st=1691768155~exp=1691768755~hmac=058cf5d40394dd4897dc5ff430e65c1e6c303f02edc60d351db59823754838ae',
        date: 'July 10, 2024',
    }
];

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-white min-h-screen">

             
                <div className="relative flex items-center justify-center bg-gray-800 py-16 px-4">
                    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={image} alt="Profile" className="rounded-full h-64 w-64 object-cover border-4 border-yellow-500 shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                            <h1 className="text-5xl font-bold text-yellow-500">Mergen Hojaberdiyew</h1>
                            <p className="text-2xl mt-4">Web Developer | Teacher | Frontend Enthusiast</p>
                            <p className="mt-4 text-lg text-gray-400">I am a passionate and skilled web developer with several years of experience in the field of web development. I specialize in creating beautiful and functional user interfaces.</p>
                            <a href="#contact" className="inline-block mt-6 px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-400">Hire Me</a>
                        </div>
                    </div>
                </div>

         
                <section className="py-16 px-4 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">About Me</h2>
                        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">
                            I am Emma Charlotte, a web developer with a strong background in teaching and a love for frontend technologies. My journey in the tech world has been driven by a desire to create impactful and user-friendly digital experiences.
                        </p>
                    </div>
                </section>

                
                <section className="py-16 px-4 bg-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">Latest Blogs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {blogPosts.map(post => (
                                <div key={post.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-pink-500">{post.title}</h3>
                                        <p className="text-gray-400 mt-4">{post.description}</p>
                                        <p className="text-gray-500 mt-2">{post.date}</p>
                                        <a href={`/blog/${post.id}`} className="inline-block mt-4 text-pink-400 hover:text-pink-300">Read more</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default HomePage;
 */











import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import image from '../../img/1.png';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa';

const blogPosts = [
    {
        id: 1,
        title: 'Exploring the World of Frontend Development',
        description: 'A deep dive into the latest frontend technologies and how to leverage them in your projects.',
        image: 'https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?w=360&t=st=1691768052~exp=1691768652~hmac=760f1a59452b8a31f371243fa0dacc49e83e51028b18ac24b040139c3c735445',
        date: 'August 12, 2024',
    },
    {
        id: 2,
        title: 'Understanding ReactJS Hooks',
        description: 'An introduction to ReactJS Hooks and how they can simplify your state management.',
        image: 'https://img.freepik.com/free-photo/react-website-design-mobile-application-with-node-js_23-2150095276.jpg?w=360&t=st=1691768100~exp=1691768700~hmac=3de325e00bc9fcb4e27a9bb502be48d22f8e4b1a1d46f5c8f2d83af00d87229e',
        date: 'July 25, 2024',
    },
    {
        id: 3,
        title: 'TailwindCSS: Designing with Utility-First',
        description: 'Learn how TailwindCSS makes designing faster and more intuitive.',
        image: 'https://img.freepik.com/free-photo/top-view-laptop-with-copy-space_23-2148367643.jpg?w=360&t=st=1691768155~exp=1691768755~hmac=058cf5d40394dd4897dc5ff430e65c1e6c303f02edc60d351db59823754838ae',
        date: 'July 10, 2024',
    }
];

const skills = [
    { id: 1, name: 'ReactJS', icon: <FaReact className="text-blue-500" />, level: '90%' },
    { id: 2, name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: '95%' },
    { id: 3, name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: '85%' },
    { id: 4, name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" />, level: '80%' },
    { id: 5, name: 'NodeJS', icon: <FaNodeJs className="text-green-500" />, level: '70%' },
];

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-white min-h-screen">

                {/* Hero Section */}
                <div className="relative flex items-center justify-center bg-gray-900 py-16 px-4">
                    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={image} alt="Profile" className="rounded h-80 w-64 object-cover border border-gray-200 shadow-2xl" />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                            <h1 className="text-5xl font-bold text-white">Mergen Hojaberdiyew</h1>
                            <p className="text-2xl mt-4">Web Developer | Teacher | Frontend Enthusiast</p>
                            <p className="mt-4 text-lg text-gray-400">I am a passionate and skilled web developer with several years of experience in the field of web development. I specialize in creating beautiful and functional user interfaces.</p>
                            <a href="#contact" className="inline-block mt-6 px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-400 transition duration-200">Hire Me</a>
                        </div>
                    </div>
                </div>

                {/* About Me Section */}
                <section className="py-16 px-4 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">About Me</h2>
                        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">
                            I am Emma Charlotte, a web developer with a strong background in teaching and a love for frontend technologies. My journey in the tech world has been driven by a desire to create impactful and user-friendly digital experiences.
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-16 px-4 bg-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">My Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {skills.map(skill => (
                                <div key={skill.id} className="bg-gray-900 rounded-lg shadow-lg p-6 text-center">
                                    <div className="text-6xl mb-4">{skill.icon}</div>
                                    <h3 className="text-xl font-bold text-pink-500">{skill.name}</h3>
                                    <div className="bg-gray-700 rounded-full h-4 mt-4">
                                        <div
                                            className="bg-pink-500 h-4 rounded-full"
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
                                    <p className="text-gray-400 mt-2">{skill.level} Proficiency</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <section className="py-16 px-4 bg-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">Latest Blogs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {blogPosts.map(post => (
                                <div key={post.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
                                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-pink-500">{post.title}</h3>
                                        <p className="text-gray-400 mt-4">{post.description}</p>
                                        <p className="text-gray-500 mt-2">{post.date}</p>
                                        <a href={`/blog/${post.id}`} className="inline-block mt-4 text-pink-400 hover:text-pink-300">Read more</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-16 px-4 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">Testimonials</h2>
                        <div className="text-center text-lg text-gray-400">
                            <p>"Mergen's work on our website was exceptional. The UI is clean and user-friendly. We couldn't have asked for a better developer."</p>
                            <p className="mt-4">- Client A</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
