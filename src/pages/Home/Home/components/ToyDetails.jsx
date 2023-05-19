/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const toyDetails = useLoaderData();
    console.log("from toydetails", toyDetails);

    const { toyUrl, toyName, sellerName, email, price, quantity, rating, details } = toyDetails;


    return (
        <div className='p-6 min-h-screen  bg-gradient-to-r from-[#794722] to-[#c0c19e]'>

            <div className="card lg:card-side bg-base-100 flex shadow-xl mt-20 ">
                <figure className='w-full'><img src={toyUrl} className='w-full' alt="Album" />

                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-3xl font-bold font-serif">{toyName}</h2>
                    <p>Description:{details}</p>
                    <div className="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <p>Seller Name: <span className='text-2xl'>{sellerName}</span></p>
                            <br /><br />
                            <p>Seller Email: <span className='text-2xl'>{email}</span></p>
                        </div>
                    </div>
                    <div className="card-actions justify-between">

                        <p>Price: <span className='text-2xl'>${price}</span></p>
                        {/* <p>Quantity:{quantity}</p> */}
                        <p>Quantity: <span className='text-2xl'>{quantity}</span></p>
                        {/* <p>Rating:{rating}</p> */}
                        <p>Rating: <span className='text-2xl'>{rating}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;