
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/aboutpage';
import ProjectsPage from '../Pages/projects';
import ContactMe from '../Pages/contactme';
import Gazananlarym from '../Pages/gazananlarym';
import BlogDetail from '../Pages/blogsDetail';
import BlogS from '../Pages/blogs';

const Rootes = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contacts" element={<ContactMe />} />
                <Route path="/blog" element={<BlogS />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/achievements" element={<Gazananlarym />} />


            </Routes>
        </Router>
    );
}

export default Rootes;
