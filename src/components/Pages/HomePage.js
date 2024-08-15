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
import { SiTailwindcss } from 'react-icons/si';
import { SiOpenai } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

import owrenmek1 from '../../img/postsimg/owrenmek/learn1.jpg'
import okuwcy1 from '../../img/postsimg/okuwcy/stdn1.jpg'
import mug1 from '../../img/postsimg/mug/teacher1.jpg'

const blogPosts = [
    {
        id: 4,
        title: 'Bir Hünäri Öwrenmek Üçin Näme Etmeli?',
        description: 'Bir hünäri öwrenmek, diňe bir iş tapmak üçin däl, eýsem şahsy ösüş we hünär taýdan ösüş üçin möhüm bir ädimdir. Bu blog ýazgysynda hünär öwrenmek üçin näme etmeli we nädip netijeli bolup bilersiňiz, şol sanda täze tehnologiýalary özleşdirmek we özüňiz üçin işlemek barada maglumatlar berilýär.',
        image: owrenmek1,
        date: 'Awgust 20, 2023',
        tags: ['#hünär', '#öwrenmek'],
        video: null,
        longDescription: 'Bir hünäri öwrenmek, özüňize üstünlik getirmek we ösüş üçin möhüm bir ädimdir. Hünär öwrenmek üçin, ilkinji nobatda, meýilnama goýmak we maksatlaryňyzy kesgitlemek zerurdyr. Ilkinji ädim hökmünde, hünäriňiziň esasy prinsiplaryny öwrenmek we işiňiziň esasy funksiyalaryna düşünmek möhümdir.',

    }
    ,
    {
        id: 5,
        title: 'Okuwçy, Öwreniji Nähili Bolmaly?',
        description: 'Bir okuwçy we öwreniji nähili bolmaly? Ygtybarly we netijeli bolmak üçin dürli strategiýalary we çäreleri öwreniň.',
        image: okuwcy1,
        date: 'Awgust 15, 2024',
        tags: ['#öwreniji', '#strategiýa', '#motivasiýa'],
        video: null,
        longDescription: 'Okuwçy we öwreniji hökmünde üstünlik gazanmak üçin birnäçe möhüm ädimleri ýerine ýetirmeli. Ilki bilen, täze tehnologiýalary we täzelikleri yzygiderli öwrenmeli. Bu, işiňizde öňdelikde bolmak üçin zerur bolup biler.',

    }
    ,
    {
        id: 6,
        title: 'Mugallym, Öwrediji Nähili Bolmaly?',
        description: 'Mugallymlar we öwredijiler nähili bolmaly, nämeleri öwretmeli we häzirki wagtda näme öwretmeli? Bu postda, öwrenmäge degişli prinsipler we nyşanlar bilen mugallym we öwrediji bolmak barada giňişleýin maglumat berilýär.',
        image: mug1,
        date: 'Awgust 14, 2024',
        tags: ['#mugallym', '#öwrediji'],
        video: null,
        longDescription: 'Mugallymlar we öwredijiler öz işlerinde nädip gowy bolmalydyr? Häzirki wagtda, okuwçylara diňe bir maglumat bermegiň däl-de, olaryň öwrenmegi we işiň öwrenilmegi ýaly esasy prinsipleri öwretmek möhümdir. Mugallymlar, okuwçylara özbaşdak pikirlenmegi we täze tehnologiýalara açyk bolmagy öwretmelidirler. Olaryň işlerinde iň ýokary netijä ýetmek üçin, täze tehnologiýalary we metodiki taýdan täzelenmeleri kabul etmek möhümdir.',
    }
];

const skills = [
    { id: 1, name: 'ReactJS', icon: <FaReact className="text-blue-500" />, level: '90%' },
    { id: 2, name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: '95%' },
    { id: 3, name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: '85%' },
    { id: 4, name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" />, level: '80%' },
    { id: 5, name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: '90%' }, // Tailwind CSS
    { id: 6, name: 'ChatGPT', icon: <SiOpenai className="text-gray-500" />, level: '85%' },
];
const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="bg-[#0d1b2a] text-white min-h-screen">

                {/* Hero Section */}
                <div className="relative flex items-center justify-center bg-gradient-to-br from-[#1e3c72] to-[#2a5298] py-16 px-4">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto z-10">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={image} alt="Profile" className="rounded h-80 w-72 object-cover border border-[#e2e2e2] shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                            <h1 className="text-5xl font-bold text-[#ffffff]">Mergen Hojaberdiyew</h1>
                            <p className="text-2xl mt-4 text-[#e4e4e4]"> Teacher | Web Developer | AI Enthusiast</p>
                            <p className="mt-4 font-medium text-lg text-[#cccccc]">Web ösüşine höwesli tejribeli öňdebaryjy hökmünde, ulanyjy üçin amatly we täsirli interfeýsleri döretmäge çemeleşýärin.</p>
                            <p className="mt-4 text-lg font-medium italic text-[#cccccc]">Ýaş mugallym bolup ýaşlara täzeçe bilim bermegiň ýollary bilen kompýuter, matematika we emeli aňyň kömeginden peýdalanmagy başarýan ýaşlary taýýarlamaga çalyşýan ýaş hünärmen.</p>

                        </div>
                    </div>
                </div>

                {/* About Me Section */}
                <section className="py-16 px-4 bg-[#0d1b2a]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8 text-[#ffffff]">Ulanýanlarym</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {skills.map(skill => (
                                <div
                                    key={skill.id}
                                    className="group flex items-center justify-center p-6 rounded-full bg-[#f9f9f9] hover:bg-[#fffefc] transition-all duration-300 transform hover:scale-110 sm:w-1/2 md:w-auto"
                                >
                                    <div className="text-4xl group-hover:text-white transition duration-300">
                                        {skill.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>




                {/* Blog Section */}
                <section className="relative py-16 px-4 bg-[#2a5298]">

                    <div className="max-w-7xl mx-auto">

                        <h2 className="text-4xl font-bold text-center mb-12 text-white">Täzelikler</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"

                        >
                            {blogPosts.map(post => (
                                <div key={post.id} className="bg-[#1e3c72] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition duration-300" onClick={() => navigate(`/blog/${post.id}`)}>
                                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white">{post.title}</h3>
                                        <p className="text-[#dddddd] mt-4">{post.description}</p>
                                        <p className="text-[#aaaaaa] mt-2">{post.date}</p>
                                        <a href={`/blog/${post.id}`} className="inline-block mt-4 text-[#3aa6f4] hover:text-[#eeeeee]">Dowamyny oka</a>
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
