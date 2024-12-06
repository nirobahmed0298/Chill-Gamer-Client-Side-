import React from 'react';
import HightesRatedGame from './HightesRatedGame';

const TopGames = ({ loadedReview }) => {
    return (

        // Highest Rated Game

        <div className='w-11/12 mx-auto my-10 text-center'>
            <h1 className='text-xl md:text-4xl font-bold border-b border-green-500 inline-block pb-3'>Highest Rated Game</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 my-8'>
                {
                    loadedReview.map(review =>
                        <HightesRatedGame key={review._id} review={review}></HightesRatedGame>
                    )
                }

            </div>
        </div>
    );
};

export default TopGames;