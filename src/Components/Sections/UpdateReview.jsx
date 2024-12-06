import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const UpdateReview = () => {
    let { user } = useContext(AuthContext);
    let reviewUpdate = useLoaderData();
    let navigate = useNavigate()
    let handlereviewUpdate = e => {
        e.preventDefault()
        let gamePhoto = e.target.photoURL.value;
        let gameName = e.target.name.value;
        let gameDescription = e.target.description.value;
        let gameRating = e.target.rating.value;
        let gameYear = e.target.year.value;
        let gameCategory = e.target.catagory.value;
        let userName = e.target.userName.value;
        let userEmail = e.target.email.value;
        let reviewUpdateItem = { gamePhoto, gameName, gameDescription, gameRating, gameYear, gameCategory, userName, userEmail, };
        fetch(`https://chill-gamer-server-lac.vercel.app/allreviews/${reviewUpdate._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewUpdateItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review Update Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
                e.target.reset();
                navigate('/myreview')

            })


    }
    return (
        <section>
            <div className='md:w-8/12 mx-auto bg-[#efefee] rounded-lg my-10 p-10 dark:bg-black dark:border'>
                <Link to='/myreview' className=' btn bg-none hover:bg-none shadow-none border-none second-font'><FaArrowLeft></FaArrowLeft> Back</Link>
                <h1 className='text-xl md:text-4xl my-1 text-center second-font'>Update Review</h1>
                <p className='text-[12px] opacity-60 text-center'>
                    A game review is an evaluation of a video game that provides feedback on various aspects of the game. <br /> The purpose of a game review is to help potential players decide if a game is worth playing, and to provide feedback to developers.                    </p>
                <form onSubmit={handlereviewUpdate} className='mt-6 dark:text-white'>
                    <div className='md:flex gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text dark:text-white font-semibold">Game Cover Thumbnail</span>
                            </label>
                            <input type="text" placeholder="Enter Game Cover Thumbnail URL" name='photoURL' defaultValue={reviewUpdate.gamePhoto} className="input border-none rounded-sm input-bordered" />
                        </div>
                        <div className="form-control  md:w-[50%]">
                            <label className="label">
                                <span className="label-text dark:text-white font-semibold">Game Name</span>
                            </label>
                            <input type="text" placeholder="Enter Game Name" name='name' defaultValue={reviewUpdate.gameName} className="input border-none rounded-sm input-bordered" />
                        </div>
                    </div>
                    <div className='md:flex gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text dark:text-white font-semibold">Review Description</span>
                            </label>
                            <input type="text" placeholder="Enter Review Description" defaultValue={reviewUpdate.gameDescription} name='description' className=" input border-none rounded-sm input-bordered" />
                        </div>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text dark:text-white font-semibold">Publishing year</span>
                            </label>
                            <input type="text" placeholder="Enter Publishing year" defaultValue={reviewUpdate.gameYear} name='year' className=" input border-none rounded-sm input-bordered" />
                        </div>
                    </div>
                    <div className='md:flex gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text dark:text-white font-semibold">Rating</span>
                            </label>
                            <input type="text" placeholder="Enter Rating Number" defaultValue={reviewUpdate.gameRating} name='rating' className=" input border-none rounded-sm input-bordered" />
                        </div>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text dark:text-white font-semibold">Game Catagory </span>
                            </label>
                            <select className="input border-none rounded-sm input-bordered" defaultValue={reviewUpdate.gameCategory} name="catagory" id="genre">
                                <option value="Strategy">Strategy</option>
                                <option value="Battle Royale">Battle Royale</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Sports">Sports</option>
                                <option value="MOBA">MOBA</option>
                                <option value="Battle Royale">Battle Royale</option>
                            </select>
                        </div>
                    </div>
                    <div className='md:flex gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text dark:text-white font-semibold">User Name</span>
                            </label>
                            <input type="text" defaultValue={user.displayName} name='userName' className=" input border-none rounded-sm input-bordered" required/>
                        </div>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text dark:text-white font-semibold">User Email</span>
                            </label>
                            <input type="text" defaultValue={user.email} name='email' className=" input border-none rounded-sm input-bordered" required/>
                        </div>
                    </div>
                    <button className='w-full btn second-font  border-none text-white bg-green-500 mt-10 my-5 rounded-sm'>Update Review</button>
                </form>
            </div>
        </section>
    );
};

export default UpdateReview;