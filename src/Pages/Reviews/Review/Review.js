import React from 'react';

const Review = ({ singleReview }) => {
    const { userImage, userName, review } = singleReview;
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <img
                        className="h-10 w-10 rounded"
                        src={userImage}
                        alt=""
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {userName}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {review}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default Review;