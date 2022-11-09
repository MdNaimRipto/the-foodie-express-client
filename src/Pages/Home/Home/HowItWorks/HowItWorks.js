import React from 'react';
import step1 from "../../../../Assets/WorkImages/step01.png"
import step2 from "../../../../Assets/WorkImages/step02.png"
import step3 from "../../../../Assets/WorkImages/step03.png"
import step4 from "../../../../Assets/WorkImages/step04.png"

const HowItWorks = () => {
    return (
        <div className="px-4 py-16 mx-auto w-full md:w-9/12 md:px-24 lg:px-8 lg:py-20 text-center">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    How it Works
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Choose your favorite food, Place order, Receive the order, Eat and Enjoy.
                </p>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                <div
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={step1}
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Choose Your Favorite
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={step2}
                            className="object-cover w-full"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    HomeChef Will Cook
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={step3}
                            className="object-cover w-full"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">Receive Your Order</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={step4}
                            className="object-cover w-full"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Eat And Enjoy
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;