import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Link } from "react-router-dom"

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://the-foodie-express-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="w-full md:w-9/12 mx-auto my-12">
            <Card>
                <div className="my-4 flex items-center justify-center md:justify-between">
                    <h5 className="text-xl md:text-3xl font-bold leading-none text-gray-900 dark:text-white">
                        Check the Latest Added Food
                    </h5>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </ul>
                </div>
                <div className='flex justify-center md:justify-end mb-4'>
                    <Link
                        className="text-base font-medium text-green-600 hover:underline dark:text-green-500"
                        to="/allServices">
                        See All
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Services;