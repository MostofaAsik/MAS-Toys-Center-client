/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import pic1 from '../../../assets/images/1.jpg'
import pic2 from '../../../assets/images/2.jpg'
import pic3 from '../../../assets/images/3.jpg'
import pic4 from '../../../assets/images/4.jpg'
import pic5 from '../../../assets/images/5.jpg'
import pic6 from '../../../assets/images/6.jpg'
import pic7 from '../../../assets/images/7.jpg'
import pic8 from '../../../assets/images/8.jpg'
import pic9 from '../../../assets/images/9.jpg'
import pic10 from '../../../assets/images/10.jpg'
import pic11 from '../../../assets/images/11.jpg'
import pic12 from '../../../assets/images/12.jpg'
import pic13 from '../../../assets/images/13.jpg'
import pic14 from '../../../assets/images/14.jpg'
import pic15 from '../../../assets/images/15.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallary = () => {

    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])
    return (
        <div className='bg-gradient-to-r from-[#4b4052] to-[#590f0f]' data-aos="fade-up-right">
            <h1 className='text-center text-3xl font-bold text-white pt-2 mb-2'>Gallary</h1>
            <div className="grid grid-cols-3 gap-4 p-4 ">
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic1} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic2} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic3} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic4} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic5} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic6} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic7} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic8} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic9} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic10} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic11} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic12} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic13} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic14} alt="Image 1" className="w-full" />
                </div>
                <div className="bg-gray-200 p-4  hover:animate-bounce origin-bottom-left duration-100 ">
                    <img src={pic15} alt="Image 1" className="w-full" />
                </div>


            </div>
        </div>
    );
};

export default Gallary;