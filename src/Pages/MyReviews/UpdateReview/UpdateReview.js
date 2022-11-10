import React from 'react';
import { Label, Textarea } from 'flowbite-react';
const UpdateReview = (_id) => {
    console.log(_id)
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const review = form.review.value;
        fetch(``)
    }
    return (
        <form onSubmit={handleUpdate}>
            <div id="textarea" className='w-[96%] md:w-2/3 mx-auto mt-16'>
                <div className="mb-2 block">
                    <Label
                        htmlFor="review"
                        value="Update Your Review"
                    />
                </div>
                <Textarea
                    name="review"
                    placeholder="Add a review..."
                    required={true}
                    rows={4}
                />
                <button type='submit' className='w-full rounded py-3 text-white bg-green-400 my-4'>
                    Update Review
                </button>
            </div>
        </form>
    );
};

export default UpdateReview;