import React from 'react';
import { Carousel } from 'flowbite-react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className=" h-80 sm:h-64 xl:h-[600px] 2xl:h-96 my-8">
            <Carousel className='text-center container mx-auto'>
                <div className='banner-1 pb-60 md:pb-28'>
                    <h2 className=" text-xl md:text-5xl mt-6 mb-4">Welcome to The Foodie Express.</h2>
                    <p className=' text-sm md:text-lg'>Welcome to my page foodie express. I provide homemade food all over the city. Just choose order and enjoy</p>
                </div>
                <div className='banner-2 pb-60 md:pb-28'>
                    <h2 className='text-xl md:text-5xl mt-6 mb-4'>Enjoy Homemade Food Anytime Anywhere</h2>
                    <p className=' text-sm md:text-lg'>Enjoy homemade food when and where you want. Just order and enjoy your meal.</p>
                </div>
                <div className='banner-3 pb-60 md:pb-28'>
                    <h2 className='text-xl md:text-5xl mt-6 mb-4'>Get Fastest delivery all Over the City.</h2>
                    <p className=' text-sm md:text-lg'>Enjoy the fastest delivery service all over the city. As a home service my service is only limited for the city.</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;