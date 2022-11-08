import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        // <div>
        //     {
        //         
        //     }
        // </div>
        <div className="w-9/12 mx-auto my-12">
            <Card>
                <div className="my-4 flex items-center justify-between">
                    <h5 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">
                        Check the Latest Order
                    </h5>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default Services;