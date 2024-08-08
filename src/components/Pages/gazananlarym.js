import React from 'react';
import Navbar from '../navbar/navbar';
import UniImage from '../../img/tdu.jpg'; // Replace with the actual university image
import GoogleCert from '../../img/sertf/sertfkat1.jpg'; // Replace with the actual Google certificate image
import MetaCert from '../../img/sertf/sertfkat1.jpg'; // Replace with the actual Meta certificate image
import CourseraCert from '../../img/sertf/sertfkat1.jpg'; // Replace with the actual Coursera certificate image

const Gazananlarym = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-gray-300 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                        <h2 className="text-4xl font-bold text-white mb-4">Kazandıklarım</h2>
                        <p className="text-lg text-gray-400 mb-4">
                            Eğitim hayatım boyunca kazandığım başarılar ve sertifikalar aşağıda listelenmiştir.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                        <h3 className="text-3xl font-bold text-white mb-4">Üniversite</h3>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/3">
                                <img
                                    src={UniImage}
                                    alt="University"
                                    className="w-full h-auto rounded-lg object-cover shadow-lg"
                                />
                            </div>
                            <div className="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
                                <h4 className="text-2xl font-bold text-white mb-2">Mahtymkuli Devlet Üniversitesi</h4>
                                <p className="text-lg text-gray-400 mb-2">Bilgisayar ve Matematik Bölümü</p>
                                <p className="text-lg text-gray-400">2015 - 2019</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                        <h3 className="text-3xl font-bold text-white mb-4">Sertifikalar</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-700 rounded-lg p-4 shadow-lg flex flex-col items-center">
                                <img
                                    src={GoogleCert}
                                    alt="Google Certificate"
                                    className="w-full h-auto rounded-lg object-cover shadow-md mb-4"
                                />
                                <h4 className="text-xl font-bold text-white">Google Sertifikası</h4>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-4 shadow-lg flex flex-col items-center">
                                <img
                                    src={MetaCert}
                                    alt="Meta Certificate"
                                    className="w-full h-auto rounded-lg object-cover shadow-md mb-4"
                                />
                                <h4 className="text-xl font-bold text-white">Meta Sertifikası</h4>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-4 shadow-lg flex flex-col items-center">
                                <img
                                    src={CourseraCert}
                                    alt="Coursera Certificate"
                                    className="w-full h-auto rounded-lg object-cover shadow-md mb-4"
                                />
                                <h4 className="text-xl font-bold text-white">Coursera Sertifikası</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gazananlarym;
