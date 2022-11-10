import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useTitle } from '../../hooks/useTitle';
import { Card } from 'flowbite-react';
import MyReview from './MyReview/MyReview';
import toast from 'react-hot-toast';

const MyReviews = () => {
    useTitle("My Reviews")

    const { user, logout } = useContext(AuthContext)

    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`https://the-foodie-express-server.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logout()
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data)
            })
    }, [user?.email, logout])


    const handleDelete = (_id) => {
        fetch(`https://the-foodie-express-server.vercel.app/myReviews/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                const confirmation = window.confirm("Are you sure want to delete this item?");
                if (confirmation) {
                    console.log(data)
                    const remaining = myReviews.filter(rev => rev._id !== _id)
                    setMyReviews(remaining)
                    toast.success("Deleted Successfully", {
                        duration: 2000,
                        style: {
                            border: '1px solid #80808082',
                            boxShadow: "none",
                            width: "350px",
                            borderRadius: "10px"
                        },
                    })
                }
            })
    }
    return (
        <div className="w-[96%] md:w-2/3 mx-auto mt-12">
            <Card>
                <div className="mb-4 mt-5 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Reviews({myReviews.length})
                    </h5>
                </div>
                <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">
                    {
                        myReviews.length === 0 && "No Reviews Were Added"
                    }
                </h5>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            myReviews.map(review =>
                                <MyReview
                                    key={review._id}
                                    myReview={review}
                                    handleDelete={handleDelete}
                                ></MyReview>)
                        }
                    </ul>
                </div>
            </Card>
        </div>
    );
};


export default MyReviews;