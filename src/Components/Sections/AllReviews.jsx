import React, { useContext, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
let AllReviews = () => {
    let loadedReview = useLoaderData();
    let [review, setReview] = useState(loadedReview);
    let [filteredData, setFilteredData] = useState('');
    let handleSorted = () => {
        let sortedData = [...review];
        sortedData.sort((a, b) => b.gameRating.localeCompare(a.gameRating)); // Ascending by default
        setReview(sortedData);
    }
    let handleFilter = () => {
        let filtered = review.filter(category =>
            category.gameCategory.toLowerCase().includes(filteredData.toLowerCase())
        );
        setReview(filtered);
    };

    return (
        <div className='w-11/12 mx-auto mt-20 mb-10 text-center'>
            <h1 className='text-xl text-center md:text-4xl font-bold border-b border-green-500 inline-block pb-3'>All Reviews</h1>
            <div className='my-4'>
                <button onClick={handleSorted} className='btn mr-4 rounded-sm border border-b-green-500 shadow-xl border-e-emerald-500'>
                    Sort By Rating
                </button>
                <select onClick={handleFilter} onChange={(e) => setFilteredData(e.target.value)}
                    className="btn rounded-none  border border-b-green-500 shadow-xl border-e-emerald-500" name="catagory" id="genre">
                    <option value='Category'>Category</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Battle Royale">Battle Royale</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Sports">Sports</option>
                    <option value="MOBA">MOBA</option>
                    <option value="Battle Royale">Battle Royale</option>
                </select>
            </div>

            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8'>
                {
                    review.map((review) =>
                        <div key={review._id} className="card bg-base-100 image-full shadow-xl transform transition duration-500 hover:scale-105">
                            <figure className='md:h-[450px]'>
                                <img className='w-full h-full '
                                    src={review.gamePhoto} alt="image" />
                            </figure>
                            <div className="card-body justify-end text-left">
                                <h2 className="card-title">{review.gameName}</h2>
                                <p className='flex-grow-0'>{review.gameDescription.slice(0, 20)}....</p>
                                <div className="card-actions justify-left">
                                    <Link to={`/reviewdetails/${review._id}`} className="btn border-white text-white btn-outline">Explore Details<FaArrowRight></FaArrowRight></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllReviews;