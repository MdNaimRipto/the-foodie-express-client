import { Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from "react-router-dom"
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useTitle } from '../../hooks/useTitle';
import AllService from '../AllService/AllService';
import AllServicesHeader from '../AllServicesHeader/AllServicesHeader';
import { Spinner } from 'flowbite-react';

const AllServices = () => {
    const { loader } = useContext(AuthContext)
    useTitle("All Food's")
    const allServices = useLoaderData()
    if (loader) {
        return <div className='text-center mt-32'>
            <Spinner
                color="success"
                aria-label="Center-aligned spinner success"
                size="xl" />
        </div>
    }
    return (
        <>
            <AllServicesHeader></AllServicesHeader>
            <div className="w-full  md:w-9/12 mx-auto my-12">
                <Card>
                    <div className="my-4 flex items-center justify-center md:justify-between">
                        <h5 className="text-xl md:text-3xl font-bold leading-none text-gray-900 dark:text-white">
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