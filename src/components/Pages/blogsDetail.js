import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';


const posts = [
    {
        id: 1,
        title: 'Exploring the World: First Blog Post',
        description: 'Join us as we venture into the unknown, discovering hidden gems across the globe. This journey takes you through the vibrant cultures and breathtaking landscapes that our world has to offer.',
        image: 'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
        detailimage1: 'https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg',
        detailimage2: 'https://img.freepik.com/premium-photo/tree-small-island-with-mountains-background_542670-1861.jpg',

        date: 'August 10, 2023',
        tags: ['#travel', '#adventure'],
        video: null,
        longDescription: 'This is a more detailed explanation of the blog post.  You can include multiple paragraphs here to give the reader a deeper understanding of the topic.   Whether it’s travel tips,  detailed itineraries, or personal reflections,  this space is perfect for conveying your story.'
    },
    {
        id: 2,
        title: 'Healthy Living: Second Blog Post',
        description: 'Discover the secrets to a balanced lifestyle that promotes health and well-being. In this post, we delve into fitness routines, dietary advice, and mental wellness tips.',
        image: 'https://images.unsplash.com/photo-1579356687668-cbdd5a551c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&h=1152&q=80',
        date: 'August 11, 2023',
        detailimage1: 'https://img.freepik.com/premium-photo/black-white-image-night-sky-with-tree-reflection_961875-56.jpg?w=360',
        tags: ['#lifestyle', '#fitness'],
        video: 'https://www.youtube.com/watch?v=cF1Na4AIecM',
        longDescription: 'This long description could include in-depth discussions about the topic, tips and tricks, or even a story that led to this post. It’s a chance to connect more personally with your audience and provide value beyond the short description.'
    },
    {
        id: 3,
        title: 'Healthy Living: Second Blog Post',
        description: 'Discover the secrets to a balanced lifestyle that promotes health and well-being. In this post, we delve into fitness routines, dietary advice, and mental wellness tips.',
        image: 'https://images.hindustantimes.com/auto/img/2021/12/28/600x338/Indian_cars_1640662074513_1640662081298.jpg',
        detailimage1: 'https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg',
        detailimage2: 'https://img.freepik.com/premium-photo/tree-small-island-with-mountains-background_542670-1861.jpg',

        date: 'August 11, 2023',
        tags: ['#lifestyle', '#fitness'],
        video: 'https://www.youtube.com/watch?v=R1QIOqrYp5s',
        longDescription: 'This long description could include in-depth discussions about the topic, tips and tricks, or even a story that led to this post. It’s a chance to connect more personally with your audience and provide value beyond the short description.'
    },
    {
        id: 4,
        title: 'Healthy Living: Second Blog Post',
        description: 'Discover the secrets to a balanced lifestyle that promotes health and well-being. In this post, we delve into fitness routines, dietary advice, and mental wellness tips.',
        image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/finance-personal-finance-manager.jpg?w=1024&quality=50',
        detailimage1: 'https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg',
        detailimage2: 'https://img.freepik.com/premium-photo/tree-small-island-with-mountains-background_542670-1861.jpg',

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
        detailimage1: 'https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg',
        detailimage2: 'https://img.freepik.com/premium-photo/tree-small-island-with-mountains-background_542670-1861.jpg',

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
        detailimage1: 'https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg',
        detailimage2: 'https://img.freepik.com/premium-photo/tree-small-island-with-mountains-background_542670-1861.jpg',

        date: 'August 11, 2023',
        tags: ['#lifestyle', '#fitness'],
        video: 'https://www.example.com/sample-video.mp4',
        longDescription: 'This long description could include in-depth discussions about the topic, tips and tricks, or even a story that led to this post. It’s a chance to connect more personally with your audience and provide value beyond the short description.'
    },

];



const BlogDetail = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) return <p>Post not found</p>;

    const getYouTubeEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-white">
                <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${post.image})` }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">{post.title}</h1>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto py-1 px-4 lg:px-20">
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-8">
                        <div className="text-gray-400 mb-6">{post.date} | {post.tags.join(' ')}</div>

                        {/* Main content section */}
                        <div className="space-y-8 leading-loose text-lg">
                            <p>{post.longDescription}</p>

                            {/* Detail images */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {post.detailimage1 && (
                                    <img src={post.detailimage1} alt="Detail 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
                                )}
                                {post.detailimage2 && (
                                    <img src={post.detailimage2} alt="Detail 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
                                )}
                                {post.detailimage3 && (
                                    <img src={post.detailimage3} alt="Detail 3" className="w-full h-60 object-cover rounded-lg shadow-md" />
                                )}
                            </div>

                            {/* Additional content for better spacing and clarity */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et sapien sed massa vehicula fermentum at a purus. Vivamus vitae justo sit amet nisi posuere convallis. Praesent egestas magna ac est tempus, a convallis nisi fermentum.</p>

                            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-purple-300">"A journey of a thousand miles begins with a single step."</blockquote>

                            <p>Suspendisse potenti. Nam vitae libero eu lacus facilisis malesuada. Integer eu dui nunc. Cras posuere dolor a suscipit cursus. Vivamus sed fermentum velit. Suspendisse vehicula interdum ex, a dignissim nulla viverra in.</p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default BlogDetail;





















/* const BlogDetail = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) return <p>Post not found</p>;

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-white">

                <header className="relative bg-cover  bg-center h-80" style={{ backgroundImage: `url(${post.image})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white">{post.title}</h1>
                        </div>
                    </div>
                </header>
                <main className="container mx-auto py-8">
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">

                        <div className="relative">
                            {post.video ? (
                                <div className="relative w-full h-96 bg-black">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-50" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 22v-20l18 10-18 10z" />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
                            )}
                        </div>
                        <div className="p-6">
                            <p className="text-gray-400 mb-4">{post.date} | {post.tags.join(' ')}</p>
                            <p className="mt-4 text-gray-300">{post.longDescription}</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default BlogDetail;

 */














