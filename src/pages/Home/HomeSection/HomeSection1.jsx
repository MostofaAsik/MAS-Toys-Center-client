/* eslint-disable no-unused-vars */
import React from 'react';

const HomeSection1 = () => {
    return (
        <div className="relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center py-16  bg-gradient-to-r from-[#34073d] to-[#566a53]" >
                    <div className="w-full max-w-md text-center text-rose-700 " >
                        <h2 className="text-4xl font-bold mb-4">Again Visit  My Website</h2>
                        <p className="text-gray-700 mb-8 hover:text-base-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sem at est venenatis rhoncus. Duis id orci sed mauris semper luctus.</p>
                        {/* <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Get Started</a> */}
                    </div>
                </div>
                <div className="w-full">
                    <div className="relative">
                        <img className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out" src="https://images.unsplash.com/photo-1626023772800-eadff10c0f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Example Image" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg hover:opacity-60 transition duration-300 ease-in-out"></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            {/* <h3 className="text-white text-2xl font-bold">Buy All Products</h3>  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection1;