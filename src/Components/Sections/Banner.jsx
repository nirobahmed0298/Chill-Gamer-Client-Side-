import React from 'react';
import banner1 from '../../assets/Fortnite.jpg'
import banner2 from '../../assets/Call_of_duty.jpg'
import banner3 from '../../assets/League_Of_Legends.jpg'
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
const Banner = () => {
    return (
        <div className="carousel w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full h-[100vh]">
                <img src={banner1} className="w-full h-full" />
                <div className='w-full absolute top-[30%] md:top-[40%] bottom-[25%] text-white text-center space-y-2'>
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        <Typewriter
                            words={['Fortnite Battle Royale']}
                            loop={3}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h1>
                    <p className='text-xs md:text-sm'>A fast-paced, free-to-play battle royale game that has remained one of the most <br /> popular online games. Known for its building mechanics, regular updates, and collaboration with various franchises.</p>
                    <button className='btn rounded-none bg-green-400 border-none text-white font-semibold'>Explore More <FaArrowCircleRight></FaArrowCircleRight></button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[100vh]">
                <img src={banner2} className="w-full h-full" />
                <div className='w-full absolute top-[30%] md:top-[40%] bottom-[25%] text-white text-center space-y-2'>
                    <h1 className='text-2xl md:text-5xl font-bold'>
                        <Typewriter
                            words={['Call of Duty : Warzone 2.0']}
                            loop={3}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className='text-sm'> The latest installment in the Call of Duty franchise, Warzone 2.0 <br /> is a free-to-play battle royale game featuring realistic combat and large-scale multiplayer modes.</p>
                    <button className='btn rounded-none bg-green-400 border-none text-white font-semibold'>Explore More <FaArrowCircleRight></FaArrowCircleRight></button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[100vh]">
                <img src={banner3} className="w-full h-full" />
                <div className='w-full absolute top-[30%] md:top-[40%] bottom-[25%] text-white text-center space-y-2'>
                    <h1 className='text-2xl md:text-5xl font-bold'>
                        <Typewriter
                            words={['League of Legends']}
                            loop={3}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className='text-sm'>
                        A highly competitive, team-based strategy game where two teams of five <br /> players fight to destroy the opponent's Nexus. It’s known for its complex gameplay, character diversity, and esports scene.
                    </p>
                    <button className='btn rounded-none bg-green-400 border-none text-white font-semibold'>Explore More <FaArrowCircleRight></FaArrowCircleRight></button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;