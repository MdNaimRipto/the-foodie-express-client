import React, { useContext } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { Label, TextInput, Textarea } from "flowbite-react"
import { AuthContext } from '../../ContextProvider/AuthProvider';

const AddReview = ({ _id }) => {
    const { user } = useContext(AuthContext)
    useTitle("Add Review")
    const handleAddReview = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const serviceId = form.serviceId.value
        const name = form.name.value;
        const image = form.image.value;
        const review = form.review.value

        const addReview = {
            email: email,
            serviceId: serviceId,
            userName: name,
            userImage: image,
            review: review
        }
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })
    }
    return (
        <form
            onSubmit={handleAddReview}
            className="flex flex-col gap-4 my-12 w-[96%] md:w-2/3 border border-gray-300 rounded px-6 py-8">
            <div>
                <div className="mb-2 block">
                    <Label value="User Email" />
                </div>
                <TextInput
                    name='email'
                    type="email"
                    value={user?.email} readOnly
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label value="Service ID" />
                </div>
                <TextInput
                    name='serviceId'
                    type="text"
                    value={_id} readOnly
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label value="User Name" />
                </div>
                <TextInput
                    name='name'
                    type="text"
                    placeholder="Name"
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label value="User Image"
                    />
                </div>
                <TextInput
                    name='image'
                    type="text"
                    placeholder='ImageURL'
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="repeat-password"
                        value="Repeat password"
                    />
                </div>
                <Textarea
                    name='review'
                    type="text"
                    placeholder='Add Review'
                    rows={5}
                    required={true}
                    shadow={true}
                />
            </div>
            <button type="submit" className='bg-green-400 text-white py-4 rounded'>
                Add Your Review
            </button>
        </form>
    );
};

export default AddReview;