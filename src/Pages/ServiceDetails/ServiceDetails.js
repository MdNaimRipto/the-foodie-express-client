import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useTitle } from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';
import AddReview from '../AddReview/AddReview';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    useTitle("Food Detail's")
    const details = useLoaderData()
    const { _id, title, img, price, description } = details

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className='w-full md:w-4/5'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img
                                    className="object-cover w-full h-56 rounded shadow-lg sm:h-[30rem]"
                                    src={img}
                                    alt=""
                                />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {title}
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                <span className='font-semibold mr-2'>price:</span>
                                <span className='font-bold'>TK.{price}</span>
                            </p>
                            <p className="text-base text-gray-700 md:text-lg my-2">
                                <span className='font-semibold'>Stock:</span>
                                <span className='text-base text-green-500 ml-1 font-semibold'>Available</span>
                            </p>
                            <p className="text-base text-gray-700 md:text-lg mb-3">
                                <span className='font-semibold'>Number of People:</span>
                                <select name="people-quantity" id="quantity" className='ml-3 mt-3 md:mt-0'>
                                    <option value="one">For One People</option>
                                    <option value="two">For Two People</option>
                                    <option value="three">For Three People</option>
                                    <option value="four">For Four People</option>
                                    <option value="family">For Family</option>
                                    <option value="mdFamily">For Family (Medium Pack)</option>
                                    <option value="lgFamily">For Family (Large Pack)</option>
                                </select>
                            </p>
                            <p className="text-base text-gray-700 md:text-lg mb-3">
                                <span className='font-semibold'>Description:</span> {description}
                            </p>
                            <button className='bg-green-500 text-white text-base py-2 px-3 rounded'>
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>
                <Reviews reviews={reviews}></Reviews>
                {
                    user?.uid ? <AddReview _id={_id}></AddReview>
                        : <h2 className='text-center text-gray-900 text-xl mt-6 font-semibold'>Please Login First to Add a Review!</h2>
                }
            </div>
        </>
    );
};

export default ServiceDetails;