import React from 'react';
import image from "../../../Assets/AboutImages/about.png"

const About = () => {
    return (
        <div className="px-4 pb-16 mx-auto w-full md:w-9/12 md:px-24 lg:px-8 lg:pb-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96 mr-0 md:mr-10"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            About The Foodie Express
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            The foodie express is a website where you can order different type of food's and get delivered within an estimated time all over the city. I run this busniess from home and it is not a company. That's why I have some limitation's like cannot provide food outside the city. Check the order page to order your favorite food.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;