/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import pic1 from '../../../assets/images/16 .jpeg'
import pic2 from '../../../assets/images/17.jpeg'
import pic3 from '../../../assets/images/18.jpeg'
import pic4 from '../../../assets/images/19.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomeSection2 = () => {

    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])

    return (
        <div className=" py-10 px-10 bg-gradient-to-r from-purple-500 to-pink-500" data-aos="fade-up-left">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center "> UpComing Exploring Soon</h2>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={pic1} alt="Category 1" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Chevrolet Corvette Stingray</h3>
                                <p>The Chevrolet Corvette Stingray is an iconic American sports car produced by General Motors under the Chevrolet brand. It is a two-seat, high-performance vehicle that combines powerful performance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={pic2} alt="Category 2" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Aston Martin Vantage</h3>
                                <p>The Vantage is designed to offer a thrilling  experience and boasts a distinctive and aggressive appearance. It features a low and wide stance, muscular  and a bold front grille, reflecting its sporty nature and Aston signature design language.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={pic3} alt="Category 3" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">McLaren 720S</h3>
                                <p>
                                    The McLaren 720S is a high-performance supercar produced by the  automotive manufacturer McLaren Automotive. It belongs Super Series lineup and is renowned for its exceptional performance, striking design, and advanced technology.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={pic4} alt="Category 3" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Porsche 911 GT3</h3>
                                <p>The Gladiator Mojave features several upgrades and modifications to enhance its off-road capabilities and desert performance. It utilizes renowned 4x4 systems and off-road components to tackle demanding terrains with confidence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection2;