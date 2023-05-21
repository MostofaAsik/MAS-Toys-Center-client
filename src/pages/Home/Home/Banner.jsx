/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1598084991519-c90900bc9df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG95JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60")` }} data-aos="fade-up" >
            <div className="hero-overlay bg-opacity-60" ></div >
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-lime-200 font-bold">MAS TOYS CENTER</h1>
                    <p className="mb-5">
                        What you are want ,it's here.

                    </p>
                    <p className="mb-5">
                        If you are Happay,we will be happy.

                    </p>
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;