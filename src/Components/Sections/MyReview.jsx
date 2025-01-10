import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaPen, FaPenAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';

const MyReview = () => {
    let myReview = useLoaderData()
    let { user } = useContext(AuthContext)
    let [reviews, setReviews] = useState(myReview);
    let handleReviewDelate = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chill-gamer-server-lac.vercel.app/allreviews/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Review has been deleted.",
                                icon: "success"
                            });
                        }
                        let remaining = reviews.filter(review => review._id !== _id);
                        setReviews(remaining);
                    })
            }
        });

    }
    return (
        <div className='w-10/12 mx-auto mt-14 dark:border dark:text-white'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='dark:text-white'>
                        <tr>
                            <th>S.No</th>
                            <th>Game Name</th>
                            <th>Game Category</th>
                            <th>Reviews Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, index) =>
                                user.email === review.userEmail &&
                                    <tr key={index} className="hover">
                                        <th>{index + 1}</th>
                                        <th>{review.gameName}</th>
                                        <td>{review.gameCategory}</td>
                                        <td>{review.userName}</td>
                                        <td>
                                            <Link to={`/reviewdetails/${review._id}`} className='btn btn-sm rounded-none px-4 bg-slate-500 text-white text-[15px] mr-2'><FaEye></FaEye></Link>
                                            <Link to={`/updatereview/${review._id}`} className='btn btn-sm rounded-none px-4 bg-green-500 text-white text-[15px] mr-2'><FaPen></FaPen></Link>
                                            <button onClick={() => handleReviewDelate(review._id)} className='btn btn-sm rounded-none px-4 bg-red-500 text-white text-[16px]'><MdDelete></MdDelete></button>
                                        </td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;