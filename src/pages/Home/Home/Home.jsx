/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import HomeSection1 from '../HomeSection/HomeSection1';
import Category from '../Category/Category';
import Gallary from '../Gallary/Gallary';
import HomeSection2 from '../HomeSection/HomeSection2';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <HomeSection2></HomeSection2>
            <Category></Category>
            <Gallary></Gallary>
            <HomeSection1></HomeSection1>

        </>
    );
};

export default Home;