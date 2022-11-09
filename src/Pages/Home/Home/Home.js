import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import HowItWorks from './HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HowItWorks></HowItWorks>
            <About></About>
        </div>
    );
};

export default Home;