import React from 'react';

const Service = ({ service }) => {
    const { title, img, price, description } = service
    return (
        <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <img className="h-32 w-32" src={img} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-2xl mb-3 font-medium text-gray-900 dark:text-white">
                        {title}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {description.slice(0, 100) + "..."}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <span className='text-base font-semibold'>TK.</span><span>{price}</span>
                </div>
            </div>
        </li>
    );
};

export default Service;