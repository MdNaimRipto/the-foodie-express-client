import React from 'react';
import { Link } from "react-router-dom"
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { _id, title, img, price, description } = service
    return (
        <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center space-x-4">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <div className="shrink-0">
                            <img className="h-16 md:h-32 w-16 md:w-32" src={img} alt="" />
                        </div>
                    </PhotoView>
                </PhotoProvider>

                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm md:text-2xl mb-1 md:mb-3 font-medium text-gray-900 dark:text-white">
                        {title}
                    </p>
                    <p className="truncate text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        {description.slice(0, 100) + "..."}
                    </p>
                </div>
                <div className='flex flex-col md:flex-row items-end md:items-center'>
                    <div className="inline-flex items-center text-xs md:text-base font-semibold text-gray-900 dark:text-white mr-0 md:mr-2 mb-2 md:mb-0">
                        <span className='font-semibold'>TK.</span><span>{price}</span>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <Link to={`/serviceDetails/${_id}`}>
                            <button className='bg-green-500 text-white text-xs md:text-base py-1 md:py-2 px-2 md:px-3 rounded'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Service;