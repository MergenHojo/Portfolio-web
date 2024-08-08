
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/aboutpage';
import ProjectsPage from '../Pages/projects';
import ContactMe from '../Pages/contactme';
import Blogs from '../Pages/blogs';
import Gazananlarym from '../Pages/gazananlarym';

const Rootes = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contacts" element={<ContactMe />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/achievements" element={<Gazananlarym />} />


            </Routes>
        </Router>
    );
}

export default Rootes;
