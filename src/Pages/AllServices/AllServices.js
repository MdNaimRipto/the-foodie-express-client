import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from "react-router-dom"
import AllService from '../AllService/AllService';
import AllServicesHeader from '../AllServicesHeader/AllServicesHeader';

const AllServices = () => {
    const allServices = useLoaderData()
    return (
        <>
            <AllServicesHeader></AllServicesHeader>
            <div className="w-full  md:w-9/12 mx-auto my-12">
                <Card>
                    <div className="my-4 flex items-center justify-between">
                        <h5 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">
                            Check All the Latest Delicious Food
                        </h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                allServices.map(service =>
                                    <AllService key={service._id} service={service}></AllService>)
                            }
                        </ul>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default AllServices;