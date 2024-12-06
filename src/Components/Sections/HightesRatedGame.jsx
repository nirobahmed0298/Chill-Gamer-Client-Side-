import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HightesRatedGame = ({ review }) => {
    return (
        <>
            {
                review?.gameRating > 4.0 &&
                <Fade delay={500}>
                    <div className="card md:card-side bg-base-100 border dark:bg-black dark:border-white">
                        <figure className='md:w-[350px] md:h-[300px]'>
                            <img className='w-full h-full'
                                src={review.gamePhoto} alt="image" />
                        </figure>
                        <div className="card-body p-10 justify-between text-left">
                            <div className='space-y-2'>
                                <h2 className="text-2xl font-bold">{review.gameName}</h2>
                                <p className='flex-grow'><span className='font-[500]'>Review Description :</span> {review.gameDescription.slice(0, 40)}...</p>
                                <div className='flex-grow-0 flex items-center gap-2'><h1 className='font-[500]'>Rating  :</h1> {review.rating}
                                    <div className='flex items-center'>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-6"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked
                                            />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                    <h1><span className='font-bold'>({review.gameRating})</span></h1>
                                </div>
                            </div>
                            <div className="card-actions justify-left">
                                <Link to={`/reviewdetails/${review._id}`} className="btn border-green-500 text-green-500 btn-outline">Explore Details<FaArrowRight></FaArrowRight></Link>
                            </div>
                        </div>
                    </div>
                </Fade>
            }

        </ >
    );
};

export default HightesRatedGame;