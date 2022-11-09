import React from 'react';
import toast from 'react-hot-toast';
import { useTitle } from '../../hooks/useTitle';

const AddService = () => {
    useTitle("Add Food")
    const handleFoodAdd = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;

        const food = {
            title: title,
            price: price,
            img: image,
            description: description
        }

        fetch("http://localhost:5000/addService", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Added Successfully", {
                    duration: 2000,
                    style: {
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
                form.reset()
            })
    }
    return (
        <form onSubmit={handleFoodAdd} className='my-12 w-[95%] md:w-4/5 container mx-auto'>
            <h2 className="text-xl md:text-4xl font-bold mb-6">Please Add Fill Add a Food</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <input
                    name="title" type="text" placeholder="Add Food Title" className="input input-bordered w-full" required />
                <input
                    name="price" type="number" placeholder="Add Food Price" className="input input-bordered w-full" required />
            </div>
            <input
                name="image" type="text" placeholder="Add Image url" className="input input-bordered w-full" required />
            <textarea name='description'
                className="textarea textarea-bordered w-full mt-10 h-52" placeholder="Add Description" required></textarea>
            <button type='submit' className='w-full py-6 mt-6 font-semibold text-lg bg-green-500 text-white rounded'>
                Add Food To The List
            </button>
        </form>
    );
};

export default AddService;