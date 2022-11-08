import React from 'react';
import banner from "../../Assets/ServiceImages/serviceBanner.jpg"

const AllServicesHeader = () => {
    return (
        <div className='bg-gray-200'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Choose, Order, Eat and enjoy
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Check all the latest food, give order and enjoy your delicious food anytime anywhere.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={banner}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServicesHeader;