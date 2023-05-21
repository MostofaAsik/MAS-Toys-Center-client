/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Banner from './Banner';
import HomeSection1 from '../HomeSection/HomeSection1';
import Category from '../Category/Category';
import Gallary from '../Gallary/Gallary';
import HomeSection2 from '../HomeSection/HomeSection2';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {


    return (
        <HelmetProvider>
            <Helmet>
                <title>Home-{"MAS Toys Center"}</title>
            </Helmet>
            <>

                <Banner></Banner>
                <HomeSection2></HomeSection2>
                <Category></Category>
                <Gallary></Gallary>
                <HomeSection1></HomeSection1>

            </>
        </HelmetProvider>
    );
};

export default Home;