import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
const GameWatchlist = () => {
    let data = useLoaderData()
    let [reviews, setReviews] = useState(data);
    let { user } = useContext(AuthContext)
    let handleWatchlistDelate = (_id) => {
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
                fetch(`https://chill-gamer-server-lac.vercel.app/watchlist/${_id}`, {
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
        <div className='w-10/12 mx-auto my-6 dark:border'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='dark:text-white'>
                        <tr>
                            <th>S.No</th>
                            <th>Game Name</th>
                            <th>Reviewer’s Name</th>
                            <th>Reviewer’s Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, index) =>
                                user.email === review.userEmail && <tr key={index} className="hover">
                                    <th>{index + 1}</th>
                                    <th>{review.gameName}</th>
                                    <td>{review.userName}</td>
                                    <td>{review.userEmail}</td>
                                    <td>
                                        <button onClick={() => handleWatchlistDelate(review._id)} className='btn btn-sm rounded-none px-4 bg-red-500 text-white text-[16px]'><MdDelete></MdDelete></button>
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

export default GameWatchlist;