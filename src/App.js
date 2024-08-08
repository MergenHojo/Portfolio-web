/* import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Mergen Hojaberdiyev Amannazarovich</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-gray-300">Hakkımda</Link></li>
                <li><Link to="/projects" className="hover:text-gray-300">Projeler</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">İletişim</Link></li>
                <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
                <li><Link to="/achievements" className="hover:text-gray-300">Kazandıklarım</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const About = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Hakkımda</h2>
    <p>
      Mergen Hojaberdiyev Amannazarovich, Türkmenistan'ın Mahtymkuli adındaki Devlet Üniversitesinde Bilgisayar ve Matematik bölümünde okudum.
      Kendim zamanında 3dsMax, Autocad, Xd Design, Android Studio (Java), Flutter, Javascript, React.js öğrendim.
      Şu anda front-end developer olarak React.js ile çalışıyorum. AI kullanmayı çok severim.
    </p>
  </div>
);

const Projects = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Projeler</h2>
    <p>GitHub'daki proje linklerini buraya ekleyebilirsiniz.</p>
  </div>
);

const Contact = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">İletişim</h2>
    <ul>
      <li>Instagram: <a href="https://www.instagram.com/mergen___hojaberdiyew" className="text-blue-500 hover:underline">mergen___hojaberdiyew</a></li>
      <li>Imo: +99361088121</li>
      <li>Email: <a href="mailto:merryhojo@gmail.com" className="text-blue-500 hover:underline">merryhojo@gmail.com</a></li>
    </ul>
  </div>
);

const Blog = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Blog</h2>
    <p>Buraya kendi fotoğraflarınızı ve felsefi notlarınızı ekleyebilirsiniz.</p>
  </div>
);

const Achievements = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Kazandıklarım</h2>
    <p>Buraya kazandığınız Google ve Meta sertifikalarının resimlerini ekleyebilirsiniz.</p>
  </div>
);

export default App;
 */

import Rootes from "./components/rootes/rootes";


function App() {
  return (
    <div>
      <Rootes />






    </div>
  );
}

export default App;
