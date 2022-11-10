import React, { useEffect, useState } from 'react';

const MyReview = ({ myReview, handleDelete }) => {
    const { serviceId, review, _id } = myReview
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/serviceDetails/${serviceId}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [serviceId])

    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <img
                        className="h-20 w-20 rounded"
                        src={reviews.img}
                        alt=""
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm md:text-base mb-2 font-medium text-gray-900 dark:text-white">
                        {reviews.title}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        <span className='text-black font-semibold'>My Review: </span>{review}
                    </p>
                </div>
                <div>
                    <button className='bg-green-500 text-white font-semibold py-2 px-3 rounded mr-3'>Update</button>
                    <button onClick={() => { handleDelete(_id) }} className='bg-red-500 text-white font-semibold py-2 px-3 rounded'>Delete</button>
                </div>
            </div>
        </li>
    );
};

export default MyReview;