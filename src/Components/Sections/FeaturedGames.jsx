import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import Poster1 from '../../assets/poster_1.jpeg'
import Poster2 from '../../assets/poster_2.jpeg'
import Poster3 from '../../assets/poster_3.jpeg'
import Poster4 from '../../assets/poster_4.jpeg'
import { FaWebflow } from 'react-icons/fa6';
import { TbWorldWww } from 'react-icons/tb';
import { Fade, Zoom } from 'react-awesome-reveal';
const FeaturedGames = () => {
    return (
        <div className='w-11/12 mx-auto my-10 text-center'>
            <h1 className='text-xl md:text-4xl font-bold border-b border-green-500 inline-block pb-3'>Featured Games</h1>
            <Fade duration={2000} delay={200}>
                <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 '>
                    <div className="card bg-base-100 shadow-xl border hover:border-pink-400 transition hover:duration-700 dark:bg-black">
                        <figure className="p-2">
                            <img
                                src={Poster1} alt="Image"
                                className="rounded-xl w-full h-60" />
                        </figure>
                        <div className="card-body items-center text-center p-2 pb-10">
                            <span className='text-sm text-pink-400 font-semibold'>Multiplayer Game</span>
                            <h2 className="card-title">The Lost Viking Saga 2024</h2>
                            <div className='flex items-center gap-4'>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><TbWorldWww></TbWorldWww></span>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><FaGooglePlay></FaGooglePlay></span>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><FaWebflow></FaWebflow></span>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border hover:border-pink-400 transition hover:duration-700 dark:bg-black">
                        <figure className="p-2">
                            <img
                                src={Poster2} alt="Image"
                                className="rounded-xl w-full h-60" />
                        </figure>
                        <div className="card-body items-center text-center p-2 pb-10">
                            <span className='text-sm text-pink-400 font-semibold'>Role Playing</span>
                            <h2 className="card-title">Shadowblade: Nightfall Assassin.</h2>
                            <div className='flex items-center gap-4'>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><TbWorldWww></TbWorldWww></span>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><FaGooglePlay></FaGooglePlay></span>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><FaWebflow></FaWebflow></span>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border hover:border-pink-400 transition hover:duration-700 dark:bg-black">
                        <figure className="p-2">
                            <img
                                src={Poster3} alt="Image"
                                className="rounded-xl w-full h-60" />
                        </figure>
                        <div className="card-body items-center text-center p-2 pb-10">
                            <span className='text-sm text-pink-400 font-semibold'>Multiplayer Game</span>
                            <h2 className="card-title">CyberGuardians: Rise of the Machines.</h2>
                            <div className='flex items-center gap-4'>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><TbWorldWww></TbWorldWww></span>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><FaGooglePlay></FaGooglePlay></span>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><FaWebflow></FaWebflow></span>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border hover:border-pink-400 transition hover:duration-700 dark:bg-black">
                        <figure className="p-2">
                            <img
                                src={Poster4} alt="Image"
                                className="rounded-xl w-full h-60" />
                        </figure>
                        <div className="card-body items-center text-center p-2 pb-10">
                            <span className='text-sm text-pink-400 font-semibold'>Role Playing Game</span>
                            <h2 className="card-title">Starbound Odyssey: Galactic Explorer.</h2>
                            <div className='flex items-center gap-4'>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><TbWorldWww></TbWorldWww></span>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><FaGooglePlay></FaGooglePlay></span>
                                <span className='hover:bg-pink-400 transition hover:duration-700 p-2 rounded-full'><FaWebflow></FaWebflow></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default FeaturedGames;