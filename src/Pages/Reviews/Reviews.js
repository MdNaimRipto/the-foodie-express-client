import React from 'react';
import { Card } from 'flowbite-react';
import Review from './Review/Review';

const Reviews = ({ reviews }) => {
    console.log(reviews)
    return (
        <div className="w-full mt-16">
            <Card>
                <div className="mb-4 mt-5 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Reviews({reviews.length})
                    </h5>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            reviews.map(review => <Review key={review._id} singleReview={review}></Review>)
                        }
                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default Reviews;