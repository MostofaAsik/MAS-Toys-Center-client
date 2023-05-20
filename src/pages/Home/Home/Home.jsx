/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import HomeSection1 from '../HomeSection/HomeSection1';
import Category from '../Category/Category';
import Gallary from '../Gallary/Gallary';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <Gallary></Gallary>
            <HomeSection1></HomeSection1>
        </>
    );
};

export default Home;