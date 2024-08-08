import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiFlutter, SiReact, SiJavascript, SiJava, SiHtml5, SiTailwindcss, SiAutodesk } from 'react-icons/si';
import Navbar from '../navbar/navbar';
import ProjectImage1 from '../../img/pr1.jpg'; // Update with your project images
import ProjectImage2 from '../../img/pr3.png';
import ProjectImage3 from '../../img/macbook.jpg';
import ProjectImage1212 from '../../img/pr1.jpg';
import Footer from '../Footer/footer';
// Add more imports as needed

const projects = [
    {
        title: "Project 1",
        image: ProjectImage1,
        techIcon: [<SiReact key="react" className="text-blue-500 text-4xl" />, <SiJavascript key="js" className="text-yellow-500 text-4xl" />, <SiTailwindcss key="tailwind" className="text-teal-500 text-4xl" />],
        githubLink: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 2",
        image: ProjectImage2,
        techIcon: <SiJavascript className="text-yellow-500 text-4xl" />,
        githubLink: "https://github.com/yourusername/project2"
    },
    {
        title: "Project 3",
        image: ProjectImage3,
        techIcon: <SiFlutter className="text-blue-400 text-4xl" />,
        githubLink: "https://github.com/yourusername/project3"
    },
    {
        title: "Project 1",
        image: ProjectImage1,
        techIcon: [<SiReact key="react" className="text-blue-500 text-4xl" />, <SiJavascript key="js" className="text-yellow-500 text-4xl" />, <SiTailwindcss key="tailwind" className="text-teal-500 text-4xl" />],
        githubLink: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 1",
        image: ProjectImage1,
        techIcon: [<SiReact key="react" className="text-blue-500 text-4xl" />, <SiJavascript key="js" className="text-yellow-500 text-4xl" />, <SiTailwindcss key="tailwind" className="text-teal-500 text-4xl" />],
        githubLink: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 1",
        image: ProjectImage1,
        techIcon: [<SiReact key="react" className="text-blue-500 text-4xl" />, <SiJavascript key="js" className="text-yellow-500 text-4xl" />, <SiTailwindcss key="tailwind" className="text-teal-500 text-4xl" />],
        githubLink: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 1",
        image: ProjectImage1,
        techIcon: [<SiReact key="react" className="text-blue-500 text-4xl" />, <SiJavascript key="js" className="text-yellow-500 text-4xl" />, <SiTailwindcss key="tailwind" className="text-teal-500 text-4xl" />],
        githubLink: "https://github.com/yourusername/project1"
    },
    // Add more project objects as needed
];



const galleryImages = [
    ProjectImage2,
    ProjectImage1212,

    ProjectImage2,
    ProjectImage1212,
    ProjectImage2,

    ProjectImage2,
    ProjectImage1212,
    ProjectImage2,

    // Add more gallery images as needed
];


const ProjectsPage = () => {
    return (
        <>
            <Navbar />

            <div className="bg-gray-900 text-gray-300 min-h-screen py-12">
                <div className="container mx-auto px-4">

                    {/* Gallery Section */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-white mb-8 text-left border-green-500 pl-2 border-l-2">
                            Project Gallery
                        </h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {galleryImages.map((image, index) => (
                                <div key={index} className="relative overflow-hidden rounded-lg">
                                    <img
                                        src={image}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-lg font-semibold">View Project</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <h1 className="text-4xl font-bold text-white mb-8 text-left border-l-2 border-yellow-400 pl-2">
                        My Projects
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <a
                                key={index}
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 shadow-lg rounded-lg flex items-center transform hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-1/3 h-32 object-cover rounded-l-lg"
                                />
                                <div className="w-2/3 p-6 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                    </div>
                                    <div className="flex flex-wrap justify-between gap-2 mt-4">
                                        <div className='flex'>
                                            {project.techIcon}
                                        </div>
                                        <div className="flex space-x-4">
                                            <FaGithub className="text-gray-400 text-2xl hover:text-white transition duration-200" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;