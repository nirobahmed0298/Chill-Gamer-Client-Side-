import React from 'react';
import { FaXmark } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReviewDetails = () => {
    let reviewDetails = useLoaderData();
    let handleWatchlist = () => {
        fetch('https://chill-gamer-server-lac.vercel.app/watchlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added WatchList Item Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }



            })
    }
    return (
        <div className='md:w-8/12 mx-auto mb-8 mt-2'>
            <div className="card lg:card-side bg-base-100 dark:bg-black dark:border shadow-xl relative">
                <figure className='md:w-[800px] h-[500px]'>
                    <img className='w-full h-full'
                        src={reviewDetails.gamePhoto} alt="Image" />
                </figure>
                <div className="card-body justify-between">
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-bold">{reviewDetails.gameName}</h2>
                        <p className='flex-grow-0'><span className='font-[500]'>Review Description :</span> {reviewDetails.gameDescription}</p>
                        <div className='flex-grow-0 flex items-center gap-2'><h1 className='font-[500]'>Rating  :</h1> {reviewDetails.rating}
                            <div className='flex items-center'>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <h1><span className='font-bold'>({reviewDetails.gameRating})</span></h1>
                        </div>
                        <p className='flex-grow-0'><span className='font-[500]'>Publishing Year :</span> {reviewDetails.gameYear}</p>
                        <p className='flex-grow-0'><span className='font-[500]'>Game Category :</span> {reviewDetails.gameCategory}</p>
                        <p className='flex-grow-0'><span className='font-[500]'>Reviewer’s Name  :</span> {reviewDetails.UserName}</p>
                        <p className='flex-grow-0'><span className='font-[500]'>Reviewer’s Email :</span> {reviewDetails.userEmail}</p>
                    </div>
                    <div className="card-actions justify-end absolute top-5 right-5">
                        <Link to='/allreviews' className="border-green-400 border text-black p-3 rounded-full dark:text-white"><FaXmark></FaXmark></Link>
                    </div>
                    <div className="card-actions justify-end">
                        <Link onClick={handleWatchlist} className="border-green-400 border btn btn-md bg-white">Add Watchlist</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;