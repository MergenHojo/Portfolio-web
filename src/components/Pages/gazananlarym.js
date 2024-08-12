import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import UniImage from '../../img/tdu.jpg'; // Replace with the actual university image
import SmallPhoto1 from '../../img/unv/a1.jpg'; // Small personal photos from university
import SmallPhoto2 from '../../img/unv/a2.JPG'; // Small personal photos from university
import SmallPhoto3 from '../../img/unv/a3.JPG'; // Small personal photos from university
import SmallPhoto4 from '../../img/unv/a4.JPG'; // Small personal photos from university
import SmallPhoto5 from '../../img/unv/a5.jpg'; // Small personal photos from university
import SmallPhoto6 from '../../img/unv/a6.jpg'; // Small personal photos from university
import SmallPhoto7 from '../../img/unv/a7.jpg'; // Small personal photos from university
import SmallPhoto8 from '../../img/unv/a8.jpg'; // Small personal photos from university
import SmallPhoto9 from '../../img/unv/a9.jpg'; // Small personal photos from university
import SmallPhoto10 from '../../img/unv/a10.jpg'; // Small personal photos from university
import SmallPhoto11 from '../../img/unv/a12.jpg'; // Small personal photos from university
import SmallPhoto12 from '../../img/unv/a13.jpg'; // Small personal photos from university
import SmallPhoto13 from '../../img/unv/a15.jpeg'; // Small personal photos from university
import SmallPhoto14 from '../../img/unv/a16.jpeg'; // Small personal photos from university
import SmallPhoto15 from '../../img/unv/a17.jpeg'; // Small personal photos from university
import SmallPhoto16 from '../../img/unv/a18.jpg'; // Small personal photos from university
import SmallPhoto17 from '../../img/unv/a19.jpg'; // Small personal photos from university
import SmallPhoto18 from '../../img/unv/a20.jpg'; // Small personal photos from university
import SmallPhoto19 from '../../img/unv/a22.jpg'; // Small personal photos from university

import CertImage1 from '../../img/sertf/sert1.jpg'; // Sertifika resimleri
import CertImage2 from '../../img/sertf/sert2.jpg';
import CertImage3 from '../../img/sertf/sert3.jpg';
import CertImage4 from '../../img/sertf/sert4.jpg';
import CertImage5 from '../../img/sertf/sert5.jpg';
import CertImage6 from '../../img/sertf/sert6.jpg';

const universityPhotos = [
    SmallPhoto1, SmallPhoto2, SmallPhoto3, SmallPhoto4,
    SmallPhoto5, SmallPhoto6, SmallPhoto7, SmallPhoto8,
    SmallPhoto9, SmallPhoto11, SmallPhoto12,
    SmallPhoto13, SmallPhoto14, SmallPhoto15, SmallPhoto16,
    SmallPhoto17, SmallPhoto18, SmallPhoto19,
];




const Gazananlarym = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => {
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const showPrevious = (e) => {
        e.stopPropagation(); // To prevent closing the modal when navigating
        if (selectedIndex > 0) {
            setSelectedIndex((prevIndex) => prevIndex - 1);
        }
    };

    const showNext = (e) => {
        e.stopPropagation(); // To prevent closing the modal when navigating
        if (selectedIndex < universityPhotos.length - 1) {
            setSelectedIndex((prevIndex) => prevIndex + 1);
        }
    };


    return (
        <>
            <Navbar />
            <div className="bg-black text-white min-h-screen py-12">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h1 className="text-6xl font-extrabold mb-6 animate-pulse">Öwrenmegi öwren we öwret</h1>
                    <p className="text-2xl text-gray-300">"Matematika bilen kodlar, matematika bilen geljek: öwreniň, ösüşdiriň, ylham beriň ! "</p>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-start mb-16 p-4 bg-gray-800">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <img
                            src={UniImage}
                            alt="University"
                            className="rounded-lg shadow-xl transition-transform transform hover:scale-105"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4 text-blue-600">
                            Magtymguly Adyndaky Türkmen Döwlet uniwersiteti
                        </h2>
                        <p className="text-lg mb-2">
                            Maglumat tehnologiýalary / Amaly matematika we informatika
                        </p>
                        <p className="text-lg mb-6">2018 - 2023</p>

                        <div className="flex flex-wrap justify-center md:justify-between gap-4">
                            {universityPhotos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt="University Memory"
                                    className="w-20 h-20 rounded-lg object-cover shadow-lg cursor-pointer"
                                    onClick={() => openModal(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>



                <div className="container mx-auto px-4 mb-16">
                    <h3 className="text-4xl font-bold text-left mb-12 text-blue-600 border-l-2 border-white pl-2">Sertifikatlarym</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="relative bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="https://www.google.com/certificates" target="_blank" rel="noopener noreferrer">
                                <img src={CertImage1} alt="Google Certificate" className="rounded-lg mb-4 object-cover" />
                                <h4 className="text-2xl font-bold">Meta sertifikaty</h4>
                                <p className="text-gray-400">Front-End Developer. React Basics</p>
                            </a>
                        </div>
                        <div className="relative bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="https://www.meta.com/certificates" target="_blank" rel="noopener noreferrer">
                                <img src={CertImage2} alt="Meta Certificate" className="rounded-lg mb-4 object-cover" />
                                <h4 className="text-2xl font-bold">UN CC:Learn sertifikaty</h4>
                                <p className="text-gray-400">Cities and climate change</p>
                            </a>
                        </div>
                        <div className="relative bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="https://www.coursera.org/certificates" target="_blank" rel="noopener noreferrer">
                                <img src={CertImage3} alt="Coursera Certificate" className="rounded-lg mb-4 object-cover" />
                                <h4 className="text-2xl font-bold">Meta sertifikaty</h4>
                                <p className="text-gray-400">Front-End Developer. React Advanced</p>
                            </a>
                        </div>
                        <div className="relative bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="https://www.coursera.org/certificates" target="_blank" rel="noopener noreferrer">
                                <img src={CertImage4} alt="Coursera Certificate" className="rounded-lg mb-4 object-cover" />
                                <h4 className="text-2xl font-bold">Google sertifikaty</h4>
                                <p className="text-gray-400">Foundations of Cybersecurity</p>
                            </a>
                        </div>
                        <div className="relative bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="https://www.coursera.org/certificates" target="_blank" rel="noopener noreferrer">
                                <img src={CertImage5} alt="Coursera Certificate" className="rounded-lg mb-4 object-cover" />
                                <h4 className="text-2xl font-bold">Meta sertifikaty</h4>
                                <p className="text-gray-400">Version Control</p>
                            </a>
                        </div>
                        <div className="relative bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="https://www.coursera.org/certificates" target="_blank" rel="noopener noreferrer">
                                <img src={CertImage6} alt="Coursera Certificate" className="rounded-lg mb-4 object-cover" />
                                <h4 className="text-2xl font-bold">Hacker-Rank sertifikaty</h4>
                                <p className="text-gray-400">Front-End Developer(React)</p>
                            </a>
                        </div>
                    </div>
                </div>

                {selectedIndex !== null && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
                        <div className="relative flex items-center justify-center">
                            <button
                                onClick={showPrevious}
                                className="absolute left-0 text-white text-2xl bg-gray-700 p-2 rounded-full m-4 hover:bg-gray-500"
                                disabled={selectedIndex === 0}
                            >
                                &larr;
                            </button>
                            <img src={universityPhotos[selectedIndex]} alt="Large View" className="max-w-full max-h-screen rounded-lg" />
                            <button
                                onClick={showNext}
                                className="absolute right-0 text-white text-2xl bg-gray-700 p-2 rounded-full m-4 hover:bg-gray-500"
                                disabled={selectedIndex === universityPhotos.length - 1}
                            >
                                &rarr;
                            </button>
                            <button
                                className="absolute top-2 right-2 text-white text-2xl font-bold"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Gazananlarym;
