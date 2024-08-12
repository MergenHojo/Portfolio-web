import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: 'Exploring the World: First Blog Post',
        description: 'Join us as we venture into the unknown, discovering hidden gems across the globe. This journey takes you through the vibrant cultures and breathtaking landscapes that our world has to offer.',
        image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
        date: 'August 10, 2023',
        tags: ['#travel', '#adventure'],
        video: null,
        longDescription: 'This is a more detailed explanation of the blog post. You can include multiple paragraphs here to give the reader a deeper understanding of the topic. Whether it’s travel tips, detailed itineraries, or personal reflections, this space is perfect for conveying your story.'
    },
    {
        id: 2,
        title: 'Healthy Living: Second Blog Post',
        description: 'Discover the secrets to a balanced lifestyle that promotes health and well-being. In this post, we delve into fitness routines, dietary advice, and mental wellness tips.',
        image: 'https://images.unsplash.com/photo-1579356687668-cbdd5a551c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&h=1152&q=80',
        date: 'August 11, 2023',
        tags: ['#lifestyle', '#fitness'],
        video: 'https://www.example.com/sample-video.mp4',
        longDescription: 'This long description could include in-depth discussions about the topic, tips and tricks, or even a story that led to this post. It’s a chance to connect more personally with your audience and provide value beyond the short description.'
    },
    {
        id: 3,
        title: 'Healthy Living: Second Blog Post',
        description: 'Discover the secrets to a balanced lifestyle that promotes health and well-being. In this post, we delve into fitness routines, dietary advice, and mental wellness tips.',
        image: 'https://images.hindustantimes.com/auto/img/2021/12/28/600x338/Indian_cars_1640662074513_1640662081298.jpg',
        date: 'August 11, 2023',
        tags: ['#lifestyle', '#fitness'],
        video: 'https://www.example.com/sample-video.mp4',
        longDescription: 'This long description could include in-depth discussions about the topic, tips and tricks, or even a story that led to this post. It’s a chance to connect more personally with your audience and provide value beyond the short description.'
    },
    {
        id: 4,
        title: 'Healthy Living: Second Blog Post',
        description: 'Discover the secrets to a balanced lifestyle that promotes health and well-being. In this post, we delve into fitness routines, dietary advice, and mental wellness tips.',
        image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/finance-personal-finance-manager.jpg?w=1024&quality=50',
        date: 'August 11, 2023',
        tags: ['#lifestyle', '#fitness'],
        video: 'https://www.example.com/sample-video.mp4',
        longDescription: 'This long description could include in-depth discussions about the topic, tips and tricks, or even a story that led to this post. It’s a chance to connect more personally with your audience and provide value beyond the short description.'
    },
    {
        id: 5,
        title: 'Healthy Living: Second Blog Post',
        description: 'Discover the secrets to a balanced lifestyle that promotes health and well-being. In this post, we delve into fitness routines, dietary advice, and mental wellness tips.',
        image: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
        date: 'August 11, 2023',
        tags: ['#lifestyle', '#fitness'],
        video: null,
        longDescription: 'This long description could include in-depth discussions about the topic, tips and tricks, or even a story that led to this post. It’s a chance to connect more personally with your audience and provide value beyond the short description.'
    },
    {
        id: 6,
        title: 'Healthy Living: Second Blog Post',
        description: 'Discover the secrets to a balanced lifestyle that promotes health and well-being. In this post, we delve into fitness routines, dietary advice, and mental wellness tips.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkwS4plhmRHFyTuBM5LcRE92T1nGUwGun4w&s',
        date: 'August 11, 2023',
        tags: ['#lifestyle', '#fitness'],
        video: 'https://www.example.com/sample-video.mp4',
        longDescription: 'This long description could include in-depth discussions about the topic, tips and tricks, or even a story that led to this post. It’s a chance to connect more personally with your audience and provide value beyond the short description.'
    },

];
/* 
const BlogS = () => {

    const BlogCard = ({ post, large }) => {
        return (
            <div className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg ${large ? 'col-span-2 row-span-2' : ''}`}>
                <div className="relative">
                    {post.video ? (
                        <div className="relative w-full h-48 bg-black">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 22v-20l18 10-18 10z" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    )}
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-white">{post.title}</h2>
                    <p className="text-gray-400">{post.date} | {post.tags.join(' ')}</p>
                    <p className="mt-4 text-gray-300">{post.description}</p>
                    <button className="mt-4 text-blue-600 hover:underline">
                        Read More
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="bg-gray-900 text-white">
                <Navbar />
                <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(https://i.pinimg.com/736x/15/c7/d7/15c7d71b129809ba996ebccc8f975e15.jpg)` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white">Programmirleme we Bilim: Öwrenmegiň we öwretmegiň ýoly</h1>
                            <p className="text-lg text-gray-300 mt-4">Tejribe gazanmak üçin birnäçe maglumatlar</p>

                        </div>
                    </div>
                </header>
                <main className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default BlogS; */


const BlogS = () => {

    const BlogCard = ({ post, large }) => {
        const navigate = useNavigate();
        return (
            <div className={`bg-gray-800 cursor-pointer rounded-lg overflow-hidden shadow-lg ${large ? 'col-span-2 row-span-2' : ''}`} onClick={() => navigate(`/blog/${post.id}`)}>
                <div className="relative">
                    {post.video ? (
                        <div className="relative w-full h-48 bg-black">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 22v-20l18 10-18 10z" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    )}
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-white">{post.title}</h2>
                    <p className="text-gray-400">{post.date} | {post.tags.join(' ')}</p>
                    <p className="mt-4 text-gray-300">{post.description}</p>
                    <Link to={`/blog/${post.id}`} className="mt-4 text-blue-600 hover:underline">
                        Read More
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="bg-gray-900 text-white">
                <Navbar />
                <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(https://i.pinimg.com/736x/15/c7/d7/15c7d71b129809ba996ebccc8f975e15.jpg)` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white">Programmirleme we Bilim: Öwrenmegiň we öwretmegiň ýoly</h1>
                            <p className="text-lg text-gray-300 mt-4">Tejribe gazanmak üçin birnäçe maglumatlar</p>
                        </div>
                    </div>
                </header>
                <main className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default BlogS;